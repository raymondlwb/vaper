webpackJsonp([11],{"90gb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("dOa3"),i={name:"hostlist",data:function(){return{form:{name:"",ips:""},tableData:[],fetchSuccess:!0,tableSelections:[],dialogVisible:!1,hostInEdit:{},tagInputVisible:!1,tagInputValue:"",page:{currentPage:1,size:10,total:5}}},methods:{loadData:function(){var t=this,e={};e.skip=this.page.size*(this.page.currentPage-1),e.limit=this.page.size*this.page.currentPage,Object(n.a)(e).then(function(e){console.log(e);var a=e.data;t.tableData=a.links}).catch(function(e){t.fetchSuccess=!1,console.log(e)})},handleCurrentChange:function(t){this.page.currentPage=t,this.loadData()},handleSizeChange:function(t){this.page.size=t,this.loadData()}},mounted:function(){var t=this,e=this;Object(n.b)().then(function(t){console.log(t);var a=t.data;e.page.total=parseInt(a.linksCount)}).catch(function(e){t.fetchSuccess=!1,console.log(e)})},created:function(){this.loadData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticStyle:{"margin-bottom":"10px"}}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:!0,border:!1}},[a("el-table-column",{attrs:{prop:"identity",label:"identity"}}),t._v(" "),a("el-table-column",{attrs:{prop:"source",label:"source"}}),t._v(" "),a("el-table-column",{attrs:{prop:"target",label:"target"}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.page.currenPage,"page-sizes":[5,10,30,50],"page-size":t.page.size,layout:"total, sizes, prev, pager, next, jumper",total:t.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("FLsc")},"data-v-2113a82c",null);e.default=s.exports},FLsc:function(t,e,a){var n=a("udAU");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("7531b576",n,!0)},udAU:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.content-container[data-v-2113a82c] {\r\n  position: relative;\r\n  padding: 20px;\r\n  width: 100%;\r\n  height: 85vh;\n}\n.box-card[data-v-2113a82c] {\r\n  margin: 0px 5px;\n}\n.links-icon[data-v-2113a82c] {\r\n  width: 24px;\r\n  height: 24px;\n}\n.input-new-tag[data-v-2113a82c] {\r\n  width: 100px;\n}\r\n",""])}});