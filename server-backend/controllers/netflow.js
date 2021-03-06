/**
 * Created by hxn 2017.12.09
 */
'use strict';

// const neo4j = require('neo4j-driver').v1;
// const driver = neo4j.driver(config.neo4j.uri, neo4j.auth.basic(config.neo4j.user, config.neo4j.password));
const driver = config.neo4jDriver

/**
 * 提交网络流量关系数据。
 */
exports.add = async (ctx) => {
    var req_body = ctx.request.body
    var uid = req_body["Uid"]
    const session = driver.session()

    var networkFlows = req_body["NetworkFlows"]
    var unixTimeStamp = req_body["UnixTime"]

    for (let i = 0; i < networkFlows.length; i++) {
        const relation = networkFlows[i]
        var res2 = await addFlow(session, relation, unixTimeStamp)
    }
    ctx.body = {
        "status": "success"
    }
}

/**
 * 查找一批节点的之间的关系
 */
exports.searchByNodes = async (ctx) => {
    const session = driver.session()
    var req_body = ctx.request.body
    var links = await searchByUids(session, req_body["uids"])
    ctx.body = {
        "status": "success",
        "links": links
    }
}
/**
 * 共有多少条关系
 */
exports.count = async (ctx) => {
    try {
        const session = driver.session()
        var linksCount = await linkCount(session)
        ctx.body = {
            "status": "success",
            "linksCount": linksCount
        }
    } catch (error) {
        ctx.status = 400
        ctx.body = {
            "status": "error",
            "message": error.message
        }
    }
}
/**
 * 获取关系数据
 */
exports.get = async (ctx) => {

    var query = ctx.request.query

    var skip = parseInt(query["skip"] ? query["skip"] : 0)
    var limit = parseInt(query["limit"] ? query["limit"] : 10)

    const session = driver.session()

    const result = await session.writeTransaction(tx => tx.run(
        'MATCH (client)-[r:REQUEST]->(server) RETURN client, r, server skip $skip limit $limit', {
            skip: skip,
            limit: limit
        }))
    session.close()
    var records = result["records"]
    var links = []

    if (records.length > 0) {
        for (var i = 0; i < records.length; i++) {
            var record_obj = records[i].toObject()
            var client = record_obj["client"]
            var server = record_obj["server"]
            var link = record_obj["r"]

            var link_data = {
                "identity": link.identity.toString(),
                "source": link.start.toString(),
                "target": link.end.toString(),
                "value": 1,
                
                "client": record_obj["client"],
                "server": record_obj["server"],
                "time": link.properties.time,
                "clientIp": link.properties.clientIP,
                "serverIp": link.properties.serverIp,
                "server_port": link.properties.serverPort,
                "process_name": link.properties.processName,
                "pps": link.properties.pps,
            }
            links.push(link_data)
        }
    }

    ctx.body = {
        "status": "success",
        "links": links
    }

}

/**
 * Public methods
 */

/**
 * count
 */
async function linkCount(neo4jSession) {
    const result = await neo4jSession.writeTransaction(tx => tx.run(
        'MATCH (n)-[r]-(m) RETURN count(r)'))
    var records = result["records"]
    var count = records[0].toObject()['count(r)'].toString()
    return count
}

/**
 * 通过多个UID查找是否为已经存储的关系
 * @param {*} NetRelations 
 */
async function searchByUids(neo4jSession, uids) {
    const result = await neo4jSession.writeTransaction(tx => tx.run(
        'MATCH((anode)-[r]-(bnode))' +
        'WHERE( anode.uid in $uids and bnode.uid in $uids)' +
        'RETURN r', {
            "uids": uids
        }))
    var links = []
    if (result.records.length > 0) {
        for (var i = 0; i < result.records.length; i++) {
            var relation = result.records[i].toObject()["r"]
            var relation_new = {
                "identity": relation.identity.toString(),
                "source": relation.start.toString(),
                "target": relation.end.toString(),
                "properties": relation.properties,
                "value": 1
            }
            links.push(relation_new)
        }
    }
    neo4jSession.close()
    return links
}

/**
 * 通过两个ip查找是否为已经存储的关系
 * @param {*} NetRelations 
 */
async function searchFlow(neo4jSession, flow) {
    const result = await neo4jSession.writeTransaction(tx => tx.run(
        'MATCH((anode)-[tcp]-(bnode))' +
        'WHERE($SrcIp in anode.ips and $DstIp in bnode.ips)' +
        'RETURN bnode', {
            "SrcIp": flow["SrcIp"],
            "DstIp": flow["DstIp"]
        }))
    return result
}

/**
 * 新建一个未存储的关系
 * @param {*} NetRelations 
 */
async function addFlow(neo4jSession, netflow, unixTimeStamp) {
    
    var CNRelation = netflowToClientNServerRelation(netflow)

    var params = {
        "clientIP": CNRelation["client"]["ip"],
        "clientPort": CNRelation["client"]["port"],
        "serverIp": CNRelation["server"]["ip"],
        "serverPort": CNRelation["server"]["port"],
        "serverPort": CNRelation["server"]["port"],
        "count": netflow["Count"],
        "packagesPerSecond": netflow["PackagesPerSecond"].toFixed(3),
        "unixTimeStamp": unixTimeStamp,
        "processName" : CNRelation["processName"]
    }

    const result = await neo4jSession.writeTransaction(tx => tx.run(
        'MATCH (client), (server) ' +
        'where ($clientIP in client.ips and $serverIp in server.ips) ' +
        'MERGE (client)-[r:REQUEST{clientIP:$clientIP, serverIp:$serverIp, serverPort:$serverPort,processName:$processName}]->(server)' +
        'ON CREATE SET r.pps = $packagesPerSecond , r.time=$unixTimeStamp, r.count=$count ' +
        'ON MATCH SET r.pps = $packagesPerSecond , r.time=$unixTimeStamp, r.count=$count ' +
        'RETURN r', params))
    neo4jSession.close()
    return result
}
  
/**
 * The client port is - 1.
 * @param {*} params 
 */
function netflowToClientNServerRelation(netflow) {
    var hosta={
        ip: netflow.SrcIp,
        port: netflow.SrcPort,
    }
    var hostb = {
        ip: netflow.DstIp,
        port: netflow.DstPort,
    }
    var relation = {}
    
    if (netflow.SrcPort == -1 ) {
        relation = {
            "client": hosta,
            "server": hostb
        }
    }else if(netflow.DstPort == -1 ){
        relation = {
            "client": hostb,
            "server": hosta
        }
    }else{
        relation = {
            "client": hostb,
            "server": hosta
        }
    }
    relation["processName"] = netflow.ProcessName
    return relation
}

    
function getUniqIpsNetRelations(NetRelations) {
    var ips = []
    for (let i = 0; i < NetRelations.length; i++) {
        const relation = NetRelations[i]
        const SendIp = relation["SendIp"]
        if (ips.indexOf(SendIp) == -1) {
            ips.push(SendIp)
        }
        const ReceiverIp = relation["ReceiverIp"]
        if (ips.indexOf(ReceiverIp) == -1) {
            ips.push(ReceiverIp)
        }
    }
    return ips
}