(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";n.r(e);var u=n(2),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=a(n(38));a(n(32));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{pageStack:[u.default]}}}},function(t,e,n){"use strict";n.r(e);var u=n(4),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(n(32));e.default={methods:{pop:function(){this.pageStack.pop()},push:function(){this.pageStack.push(u.default)},shoot:function(){this.save(!0,"Nome Cognome")},reset:function(){this.save(!1,"")},save:function(t,e){localStorage.setItem("authenticated",t),localStorage.setItem("userName",e),this.authenticated=t,this.userName=e}},data:function(){return{authenticated:localStorage.getItem("authenticated"),userName:localStorage.getItem("userName")}},props:["pageStack"],components:{},key:"key_page1"}},function(t,e,n){"use strict";n.r(e);var u=n(6),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=o(n(39)),a=o(n(42)),r=o(n(45));o(n(31));function o(t){return t&&t.__esModule?t:{default:t}}var i=[{title:"Inizio",component:"HomePage"},{title:"Ricarica",component:"TopUpPage"},{title:"Tessera",component:"PassPage"}];e.default={methods:{pop:function(){this.pageStack.pop()}},props:["pageStack"],data:function(){return{currentPage:i[0],pages:i,openSide:!1}},components:{HomePage:r.default,TopUpPage:u.default,PassPage:a.default},key:"key_page2"}},function(t,e,n){"use strict";n.r(e);var u=n(8),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(n(21));e.default={name:"topup-page",props:["toggleMenu","title"],data:function(){return{}},components:{customToolbar:u.default}}},function(t,e,n){"use strict";n.r(e);var u=n(10),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","action"]}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var u=n(13),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(n(21));e.default={name:"pass-page",props:["toggleMenu","title"],data:function(){return{}},components:{customToolbar:u.default}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var u=n(16),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(n(21));e.default={name:"home-page",props:["toggleMenu","title"],data:function(){return{}},components:{customToolbar:u.default}}},function(t,e,n){},function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var u=n(28),a=n(9);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,null,null);i.options.__file="src/Toolbar.vue",e.default=i.exports},function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-navigator",{attrs:{"page-stack":t.pageStack}},t._l(t.pageStack,function(e){return n(e,{key:e.key,tag:"component",attrs:{"page-stack":t.pageStack}})}),1)},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[t._v("\n\t\t"+t._s(t.authenticated)+"\n\t\t"),t.authenticated?n("p",[t._v("\n\t\t\tBenvenuto 1019, "),n("b",[t._v(t._s(t.userName))]),t._v("."),n("br"),t._v(" "),n("v-ons-button",{on:{click:t.push}},[t._v("Entra")]),n("br"),t._v(" "),n("v-ons-button",{on:{click:t.reset}},[t._v("Esci")])],1):n("p",[t._v("\n\t\t\tAccedi alla tua utenza online e seleziona "),n("b",[t._v("Genera QR code di accesso")]),t._v("."),n("br"),t._v("\n\t\t\tPoi premi il pulsante:"),n("br"),t._v(" "),n("v-ons-button",{on:{click:t.shoot}},[t._v("Inquadra il QR code")])],1)])},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-splitter",[n("v-ons-splitter-side",{attrs:{swipeable:"",collapse:"",width:"250px",animation:t.$ons.platform.isAndroid()?"overlay":"reveal",open:t.openSide},on:{"update:open":function(e){t.openSide=e}}},[n("v-ons-page",[n("v-ons-list",[n("v-ons-list-header",[t._v("Servizi")]),t._v(" "),t._l(t.pages,function(e){return n("v-ons-list-item",{key:e.title,attrs:{tappable:"",modifier:"chevron"},on:{click:function(n){t.currentPage=e,t.openSide=!1}}},[n("div",{staticClass:"center"},[t._v(t._s(e.title))])])})],2)],1)],1),t._v(" "),n("v-ons-splitter-content",[n(t.currentPage.component,{tag:"component",attrs:{title:t.currentPage.title,"toggle-menu":function(){return t.openSide=!t.openSide}}})],1)],1)],1)},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:this.title,action:this.toggleMenu}}),this._v(" "),this._t("default",[e("b",[this._v("Ricarica")]),this._v(" bella\n  ")])],2)},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:this.title,action:this.toggleMenu}}),this._v(" "),this._t("default",[this._v("\n    Contenuto della "),e("b",[this._v("Home page")])])],2)},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:this.title,action:this.toggleMenu}}),this._v(" "),this._t("default",[e("b",[this._v("Prova")]),this._v(" prova\n  ")])],2)},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-toolbar",[e("div",{staticClass:"left"},[e("v-ons-toolbar-button",{on:{click:this.action}},[e("v-ons-icon",{attrs:{icon:"ion-navicon, material:md-menu"}})],1)],1),this._v(" "),e("div",{staticClass:"center"},[this._v(this._s(this.title))])])},a=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},,,function(t,e,n){"use strict";n.r(e);var u=n(22),a=n(1);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,null,null);i.options.__file="src/App.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var u=n(24),a=n(5);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(48);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,"031ed1da",null);i.options.__file="src/Page2.vue",e.default=i.exports},function(t,e,n){t.exports=n(34)},function(t,e,n){"use strict";var u=i(n(35)),a=i(n(37)),r=i(n(30)),o=i(n(31));function i(t){return t&&t.__esModule?t:{default:t}}n(50),n(52),r.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),u.default.use(a.default),new u.default({el:"#app",template:"<app></app>",components:{App:o.default}})},,,,function(t,e,n){"use strict";n.r(e);var u=n(23),a=n(3);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,null,null);i.options.__file="src/Page1.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var u=n(25),a=n(7);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(40);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,"344f8656",null);i.options.__file="src/TopUpPage.vue",e.default=i.exports},function(t,e,n){"use strict";var u=n(11);n.n(u).a},,function(t,e,n){"use strict";n.r(e);var u=n(27),a=n(12);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(43);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,"4a65b739",null);i.options.__file="src/PassPage.vue",e.default=i.exports},function(t,e,n){"use strict";var u=n(14);n.n(u).a},,function(t,e,n){"use strict";n.r(e);var u=n(26),a=n(15);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n(46);var o=n(0),i=Object(o.a)(a.default,u.a,u.b,!1,null,"5be39a07",null);i.options.__file="src/HomePage.vue",e.default=i.exports},function(t,e,n){"use strict";var u=n(17);n.n(u).a},,function(t,e,n){"use strict";var u=n(18);n.n(u).a}],[[33,2,1]]]);