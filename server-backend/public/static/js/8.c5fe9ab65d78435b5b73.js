webpackJsonp([8],{"0I0M":function(n,a,t){n.exports=t.p+"static/img/dashboard-bg.9916d9e.png"},ARoL:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("Dd8w"),c=t.n(o),i=t("JAv/"),s=t("dOa3"),d=t("0I0M"),e=t.n(d),r=t("NYxO"),p={name:"dashboard",components:{},data:function(){return{dashboard_bg:e.a+"?"+ +new Date,hostCount:0,linksCount:0}},methods:{hostclick:function(){this.$router.push({name:"host"})},linksclick:function(){this.$router.push({name:"link-list"})}},computed:c()({},Object(r.b)(["roles"])),created:function(){var n=this;Object(i.d)().then(function(a){console.log(a);var t=a.data;n.hostCount=t.node_count}).catch(function(a){n.fetchSuccess=!1,console.log(a)}),Object(s.b)().then(function(a){console.log(a);var t=a.data;n.linksCount=t.linksCount}).catch(function(a){n.fetchSuccess=!1,console.log(a)})}},x={render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"dashboard-container"},[t("el-row",{staticStyle:{height:"100%","margin-left":"0px","margin-right":"0px"},attrs:{gutter:20}},[t("el-col",{attrs:{md:8,sm:24}},[t("div",{staticClass:"dash-card"},[t("div",{staticStyle:{width:"100%","text-align":"center","font-size":"60px"}},[n._v("\n          Vaper\n        ")])]),n._v(" "),t("div",{staticClass:"dash-card",on:{click:n.hostclick}},[t("svg-icon",{attrs:{"icon-class":"host","class-name":"card-panel-icon"}}),n._v(" "),t("div",{staticClass:"icon-count"},[n._v("\n          "+n._s(n.hostCount)+"\n          "),t("span",{staticClass:"icon-title"},[n._v("Host")])])],1),n._v(" "),t("div",{staticClass:"dash-card",on:{click:n.linksclick}},[t("svg-icon",{attrs:{"icon-class":"wang","class-name":"card-panel-icon"}}),n._v(" "),t("div",{staticClass:"icon-count"},[n._v("\n          "+n._s(n.linksCount)+"\n          "),t("span",{staticClass:"icon-title"},[n._v("Links")])])],1)])],1)],1)},staticRenderFns:[]};var b=t("VU/8")(p,x,!1,function(n){t("KyN/")},"data-v-bdc67814",null);a.default=b.exports},"KyN/":function(n,a,t){var o=t("dXvi");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("168ecd04",o,!0)},dXvi:function(n,a,t){(n.exports=t("FZ+f")(!1)).push([n.i,'\n@-webkit-keyframes bcani-data-v-bdc67814 {\nfrom {\n    background: rgba(230, 255, 255, 0.1);\n    -webkit-box-shadow: 0px 15px 30px -20px #888888;\n            box-shadow: 0px 15px 30px -20px #888888;\n}\nto {\n    background: rgba(230, 255, 255, 0.6);\n    -webkit-box-shadow: 0px 30px 30px -20px #888888;\n            box-shadow: 0px 30px 30px -20px #888888;\n}\n}\n@keyframes bcani-data-v-bdc67814 {\nfrom {\n    background: rgba(230, 255, 255, 0.1);\n    -webkit-box-shadow: 0px 15px 30px -20px #888888;\n            box-shadow: 0px 15px 30px -20px #888888;\n}\nto {\n    background: rgba(230, 255, 255, 0.6);\n    -webkit-box-shadow: 0px 30px 30px -20px #888888;\n            box-shadow: 0px 30px 30px -20px #888888;\n}\n}\n@-webkit-keyframes bcaniback-data-v-bdc67814 {\nfrom {\n    background: rgba(230, 255, 255, 0.6);\n    -webkit-box-shadow: 0px 30px 30px -20px #888888;\n            box-shadow: 0px 30px 30px -20px #888888;\n}\nto {\n    background: rgba(230, 255, 255, 0.1);\n    -webkit-box-shadow: 0px 15px 30px -20px #888888;\n            box-shadow: 0px 15px 30px -20px #888888;\n}\n}\n@keyframes bcaniback-data-v-bdc67814 {\nfrom {\n    background: rgba(230, 255, 255, 0.6);\n    -webkit-box-shadow: 0px 30px 30px -20px #888888;\n            box-shadow: 0px 30px 30px -20px #888888;\n}\nto {\n    background: rgba(230, 255, 255, 0.1);\n    -webkit-box-shadow: 0px 15px 30px -20px #888888;\n            box-shadow: 0px 15px 30px -20px #888888;\n}\n}\n.dashboard-container[data-v-bdc67814] {\n  height: 100%;\n  background: #ffffff;\n  background-image: url(/static/imgs/dashboard-bg.png);\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n}\n.dash-card[data-v-bdc67814]:hover {\n  -webkit-animation: bcani-data-v-bdc67814 0.6s;\n          animation: bcani-data-v-bdc67814 0.6s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.dash-card[data-v-bdc67814] {\n  -webkit-animation: bcaniback-data-v-bdc67814 3s;\n          animation: bcaniback-data-v-bdc67814 3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background: rgba(51, 255, 255, 0.6);\n  border-width: 0px;\n  margin: 20% 10px;\n  padding: 16px;\n  cursor: pointer;\n  height: auto;\n}\n.dash-card[data-v-bdc67814]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n.dash-card .icon-count[data-v-bdc67814] {\n  margin: 10px 0px 0px 0px;\n  float: right;\n  font-size: 60px;\n}\n.dash-card .icon-count .icon-title[data-v-bdc67814] {\n  font-size: 36px;\n  color: #aaaaaa;\n}\n.card-panel-icon[data-v-bdc67814] {\n  width: 90px;\n  height: 90px;\n  float: left;\n  margin: 0px 0px 10px 0px;\n}\n',""])}});