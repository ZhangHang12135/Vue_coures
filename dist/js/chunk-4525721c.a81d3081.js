(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4525721c"],{"0c0c":function(e,t,n){},"1d2c":function(e,t,n){"use strict";var a=n("edfe"),r=n.n(a);r.a},"9fea":function(e,t,n){"use strict";var a=n("0c0c"),r=n.n(a);r.a},ed3a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-wrapper"},[n("Layout",{staticClass:"layout-outer"},[n("Sider",{staticClass:"sider-outer",attrs:{collapsible:"","hide-trigger":"",breakpoint:"sm"},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[n("side-menu",{attrs:{collapsed:e.collapsed,list:e.routers}})],1),n("Layout",[n("Header",{staticClass:"header-wrapper"},[n("Icon",{class:e.triggerClasses,attrs:{type:"md-menu",size:32},nativeOn:{click:function(t){return e.handleCollapsed(t)}}})],1),n("Content",{staticClass:"content-con"},[n("div",[n("Tabs",{attrs:{type:"card",value:e.getTabNameByRoute(e.$route)},on:{"on-click":e.handleClickTab}},e._l(e.tabList,function(t,a){return n("TabPane",{key:"tabNav"+a,attrs:{label:e.labelRender(t),name:e.getTabNameByRoute(t)}})}),1)],1),n("div",{staticClass:"view-box"},[n("Card",{staticClass:"page-card",attrs:{shadow:""}},[n("router-view")],1)],1)])],1)],1)],1)},r=[],o=n("cebc"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-menu-wrapper"},[e._t("default"),n("Menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],ref:"menu",attrs:{"active-name":e.$route.name,"open-names":e.openNames,width:"auto",theme:"dark"},on:{"on-select":e.handleSelect}},[e._l(e.list,function(t){return[t.children?n("re-submenu",{key:"menu_"+t.name,attrs:{name:t.name,parent:t}}):n("menu-item",{key:"menu_"+t.name,attrs:{name:t.name}},[n("Icon",{attrs:{type:t.icon,size:20}}),e._v(e._s(t.meta.title))],1)]})],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],staticClass:"drop-wrapper"},[e._l(e.list,function(t){return[t.children?n("re-dropdown",{key:"drop_"+t.name,attrs:{"show-title":!1,"icon-color":"#fff",parent:t},on:{"on-select":e.handleSelect}}):n("Tooltip",{key:"drop_"+t.name,attrs:{transfer:"",content:t.title,placement:"right"}},[n("span",{staticClass:"drop-menu-span",on:{click:function(n){return e.handleClick(t.name)}}},[n("Icon",{attrs:{type:t.icon,size:20,color:"#fff"}})],1)])]})],2)],2)},l=[],i=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Submenu",{attrs:{name:e.parent.name}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:e.parent.icon,size:20}}),e._v("\n    "+e._s(e.parent.meta.title)+"\n  ")],1),e._l(e.parent.children,function(t){return[t.children?n("re-submenu",{key:"menu_"+t.name,attrs:{name:t.name,parent:t}}):n("menu-item",{key:"menu_"+t.name,attrs:{name:t.name}},[n("Icon",{attrs:{type:t.icon,size:20}}),e._v(e._s(t.meta.title))],1)]})],2)}),c=[],u={name:"ReSubmenu",props:{parent:{type:Object,default:function(){return{}}}}},p=u,d=n("2877"),m=Object(d["a"])(p,i,c,!1,null,null,null),h=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dropdown",{attrs:{placement:"right-start"},on:{"on-click":e.handleClick}},[n("span",{staticClass:"drop-menu-span",style:e.titleStyle},[n("Icon",{attrs:{type:e.parent.icon,size:20,color:e.iconColor}}),e.showTitle?n("span",[e._v(e._s(e.parent.meta.title))]):e._e()],1),n("Dropdown",{attrs:{slot:"list"},slot:"list"},[e._l(e.parent.children,function(t){return[t.children?n("re-dropdown",{key:"drop_"+t.name,attrs:{parent:t}}):n("DropdownItem",{key:"drop_"+t.name,attrs:{name:t.name}},[n("Icon",{attrs:{type:t.icon,size:20,color:"#515a6e"}}),e._v("\n        "+e._s(t.meta.title)+"\n        ")],1)]})],2)],1)},b=[],v={name:"ReDropdown",props:{parent:{type:Object,default:function(){return{}}},iconColor:{type:String,default:"#515a6e"},showTitle:{type:Boolean,default:!0}},computed:{titleStyle:function(){return{textAlign:this.showTitle?"left":"center",paddingLeft:this.showTitle?"16px":""}}},methods:{handleClick:function(e){this.showTitle||this.$emit("on-select",e)}}},y=v,w=Object(d["a"])(y,f,b,!1,null,null,null),_=w.exports,k=n("2f62"),C=n("c092"),g={name:"SideMenu",components:{ReSubmenu:h,ReDropdown:_},props:{collapsed:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},computed:Object(o["a"])({},Object(k["d"])({routers:function(e){return e.router.routers}}),{openNames:function(){return Object(C["c"])(this.$route.name,this.routers)}}),watch:{openNames:function(){var e=this;this.$nextTick(function(){e.$refs.menu.updateOpened()})}},methods:{handleSelect:function(e){this.$router.push({name:e})}}},O=g,T=(n("9fea"),Object(d["a"])(O,s,l,!1,null,null,null)),R=T.exports,$=R,j={name:"layout",components:{SideMenu:$},data:function(){return{collapsed:!1,getTabNameByRoute:C["e"]}},watch:{$route:function(e){this.UPDATE_ROUTER(e)}},computed:Object(o["a"])({triggerClasses:function(){return["trigger-icon",this.collapsed?"rotate":"/login"]}},Object(k["d"])({tabList:function(e){return e.tabNav.tabList},routers:function(e){return e.router.routers.filter(function(e){return"*"!==e.path&&"/login"!==e.path})}})),methods:Object(o["a"])({handleCollapsed:function(){this.collapsed=!this.collapsed}},Object(k["b"])(["handleRemove"]),Object(k["c"])(["UPDATE_ROUTER"]),{handleClickTab:function(e){var t=Object(C["d"])(e);this.$router.push(t)},handleTabRemove:function(e,t){var n=this;t.stopPropagation(),this.handleRemove({id:e,$route:this.$route}).then(function(e){n.$router.push(e)})},labelRender:function(e){var t=this;this.$createElement;return function(n){return n("div",[n("span",[e.meta.title]),n("icon",{nativeOn:{click:t.handleTabRemove.bind(t,Object(C["e"])(e))},attrs:{type:"md-close-circle"},style:"line-height: 10px"})])}}})},x=j,S=(n("1d2c"),Object(d["a"])(x,a,r,!1,null,null,null));t["default"]=S.exports},edfe:function(e,t,n){}}]);