(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6a8632a"],{"11e9":function(t,e,n){var a=n("52a7"),o=n("4630"),i=n("6821"),r=n("6a99"),u=n("69a8"),s=n("c69a"),c=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?c:function(t,e){if(t=i(t),e=r(e,!0),s)try{return c(t,e)}catch(n){}if(u(t,e))return o(!a.f.call(t,e),t[e])}},4057:function(t,e,n){},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"57f2":function(t,e,n){var a,o;!function(i,r){a=r,o="function"===typeof a?a.call(e,n,e,t):a,void 0===o||(t.exports=o)}(0,function(t,e,n){var a=function(t,e,n,a,o,i){for(var r=0,u=["webkit","moz","ms","o"],s=0;s<u.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[u[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[s]+"CancelAnimationFrame"]||window[u[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-r)),o=window.setTimeout(function(){t(n+a)},a);return r=n+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c=this;for(var l in c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},i)i.hasOwnProperty(l)&&(c.options[l]=i[l]);""===c.options.separator&&(c.options.useGrouping=!1),c.options.prefix||(c.options.prefix=""),c.options.suffix||(c.options.suffix=""),c.d="string"==typeof t?document.getElementById(t):t,c.startVal=Number(e),c.endVal=Number(n),c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(o)||2e3,c.formatNumber=function(t){var e,n,a,o;if(t=t.toFixed(c.decimals),t+="",e=t.split("."),n=e[0],a=e.length>1?c.options.decimal+e[1]:"",o=/(\d+)(\d{3})/,c.options.useGrouping)for(;o.test(n);)n=n.replace(o,"$1"+c.options.separator+"$2");return c.options.prefix+n+a+c.options.suffix},c.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},c.easingFn=c.options.easingFn?c.options.easingFn:c.easeOutExpo,c.formattingFn=c.options.formattingFn?c.options.formattingFn:c.formatNumber,c.version=function(){return"1.7.1"},c.printValue=function(t){var e=c.formattingFn(t);"INPUT"===c.d.tagName?this.d.value=e:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=e:this.d.innerHTML=e},c.count=function(t){c.startTime||(c.startTime=t),c.timestamp=t;var e=t-c.startTime;c.remaining=c.duration-e,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.easingFn(e,0,c.startVal-c.endVal,c.duration):c.frameVal=c.easingFn(e,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(e/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(t){return c.callback=t,c.rAF=requestAnimationFrame(c.count),!1},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},c.update=function(t){cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=Number(t),c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count)},c.printValue(c.startVal)};return a})},"5dbc":function(t,e,n){var a=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,r=e.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&a(i)&&o&&o(t,i),t}},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,o=1,i={},r=!1,u=t.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(t);s=s&&s.setTimeout?s:t,"[object process]"==={}.toString.call(t.process)?m():p()?g():t.MessageChannel?h():u&&"onreadystatechange"in u.createElement("script")?v():V(),s.setImmediate=c,s.clearImmediate=l}function c(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return i[o]=r,a(o),o++}function l(t){delete i[t]}function f(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function d(t){if(r)setTimeout(d,0,t);else{var e=i[t];if(e){r=!0;try{f(e)}finally{l(t),r=!1}}}}function m(){a=function(t){e.nextTick(function(){d(t)})}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function g(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&d(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;d(e)},a=function(e){t.port2.postMessage(e)}}function v(){var t=u.documentElement;a=function(e){var n=u.createElement("script");n.onreadystatechange=function(){d(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function V(){a=function(t){setTimeout(d,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"8b97":function(t,e,n){var a=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var a=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}},9349:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("left"),n("span",{ref:"number",class:t.countClass,attrs:{id:t.eleId}}),t._t("right")],2)},o=[],i=(n("c5f6"),n("57f2")),r=n.n(i),u=n("5118"),s=(n("4057"),{name:"CountTo",computed:{eleId:function(){return"count_up_".concat(this._uid)},countClass:function(){return["count-to-number",this.className]}},data:function(){return{counter:{}}},props:{className:{type:String,default:""},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:1},useEasing:{type:Boolean,default:!1},useGrouping:{type:Boolean,default:!0},separator:{type:String,default:","},decimal:{type:String,default:"."},delay:{type:Number,default:0}},methods:{getCount:function(){return this.$refs.number.innerText},emitEndEvent:function(){var t=this;this.$nextTick(function(){Object(u["setTimeout"])(function(){t.$emit("on-animation-end",Number(t.getCount()))},1e3*t.duration)})}},watch:{endVal:function(t,e){this.counter.update(e),this.emitEndEvent()}},mounted:function(){var t=this;this.$nextTick(function(){t.counter=new r.a(t.eleId,t.startVal,t.endVal,t.decimals,t.duration,{useEasing:t.useEasing,useGrouping:t.useGrouping})}),Object(u["setTimeout"])(function(){t.counter.start(),t.emitEndEvent()},this.delay)}}),c=s,l=n("2877"),f=Object(l["a"])(c,a,o,!1,null,null,null),d=f.exports;e["a"]=d},a0d7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("count-to",{ref:"countTo",attrs:{"end-val":t.endVal,decimals:2,className:t.test},on:{"on-animation-end":t.handleEnd}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v("总金额")]),n("span",{attrs:{slot:"right"},slot:"right"},[t._v("$")])]),n("button",{on:{click:t.getNumber}},[t._v("获取实例")]),n("button",{on:{click:t.addVal}},[t._v(" 更新值")])],1)},o=[],i=n("9349"),r={name:"count_to",components:{CountTo:i["a"]},data:function(){return{endVal:100,test:"test"}},methods:{getNumber:function(){this.$refs.countTo.getCount()},addVal:function(){this.endVal+=100},handleEnd:function(t){console.log("end ->",t)}}},u=r,s=n("2877"),c=Object(s["a"])(u,a,o,!1,null,null,null);e["default"]=c.exports},aa77:function(t,e,n){var a=n("5ca1"),o=n("be13"),i=n("79e5"),r=n("fdef"),u="["+r+"]",s="​",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t,e,n){var o={},u=i(function(){return!!r[t]()||s[t]()!=s}),c=o[t]=u?e(d):r[t];n&&(o[n]=c),a(a.P+a.F*u,"String",o)},d=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},c5f6:function(t,e,n){"use strict";var a=n("7726"),o=n("69a8"),i=n("2d95"),r=n("5dbc"),u=n("6a99"),s=n("79e5"),c=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,m="Number",p=a[m],g=p,h=p.prototype,v=i(n("2aeb")(h))==m,V="trim"in String.prototype,b=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=V?e.trim():d(e,3);var n,a,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var r,s=e.slice(2),c=0,l=s.length;c<l;c++)if(r=s.charCodeAt(c),r<48||r>o)return NaN;return parseInt(s,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(v?s(function(){h.valueOf.call(n)}):i(n)!=m)?r(new g(b(e)),n,p):b(e)};for(var y,w=n("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;w.length>T;T++)o(g,y=w[T])&&!o(p,y)&&f(p,y,l(g,y));p.prototype=h,h.constructor=p,n("2aba")(a,m,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);