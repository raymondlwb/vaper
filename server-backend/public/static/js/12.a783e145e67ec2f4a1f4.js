webpackJsonp([12],{"90gb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("dOa3"),r=a("Q0Ca"),i={name:"hostlist",data:function(){return{form:{name:"",ips:""},tableData:[],fetchSuccess:!0,tableSelections:[],dialogVisible:!1,hostInEdit:{},tagInputVisible:!1,tagInputValue:"",page:{currentPage:1,size:10,total:5}}},methods:{loadData:function(){var t=this,e={};e.skip=this.page.size*(this.page.currentPage-1),e.limit=this.page.size*this.page.currentPage,Object(n.a)(e).then(function(e){console.log(e);var a=e.data;t.tableData=a.links}).catch(function(e){t.fetchSuccess=!1,console.log(e)})},handleCurrentChange:function(t){this.page.currentPage=t,this.loadData()},handleSizeChange:function(t){this.page.size=t,this.loadData()},timeUnixToHuman:function(t,e,a,n){var i=new Date(1e3*a);return Object(r.dateFormat)(i,"yyyy-MM-dd hh:mm")}},mounted:function(){var t=this,e=this;Object(n.b)().then(function(t){console.log(t);var a=t.data;e.page.total=parseInt(a.linksCount)}).catch(function(e){t.fetchSuccess=!1,console.log(e)})},created:function(){this.loadData()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticStyle:{"margin-bottom":"10px"}}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:!0,border:!1}},[a("el-table-column",{attrs:{prop:"identity",label:"identity"}}),t._v(" "),a("el-table-column",{attrs:{prop:"clientIp",label:"client ip"}}),t._v(" "),a("el-table-column",{attrs:{prop:"serverIp",label:"server ip"}}),t._v(" "),a("el-table-column",{attrs:{prop:"server_port",label:"port"}}),t._v(" "),a("el-table-column",{attrs:{prop:"process_name",label:"process name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pps",label:"Packages per second"}}),t._v(" "),a("el-table-column",{attrs:{prop:"time",label:"Update",formatter:t.timeUnixToHuman}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.page.currenPage,"page-sizes":[5,10,30,50],"page-size":t.page.size,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(i,l,!1,function(t){a("VScQ")},"data-v-35d69762",null);e.default=o.exports},Q4P9:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.content-container[data-v-35d69762] {\r\n  position: relative;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 85vh;\n}\n.box-card[data-v-35d69762] {\r\n  margin: 0px 5px;\n}\n.links-icon[data-v-35d69762] {\r\n  width: 24px;\r\n  height: 24px;\n}\n.input-new-tag[data-v-35d69762] {\r\n  width: 100px;\n}\r\n",""])},VScQ:function(t,e,a){var n=a("Q4P9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("72ffd84a",n,!0)}});