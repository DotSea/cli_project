(function(e){function t(t){for(var r,l,u=t[0],c=t[1],i=t[2],s=0,d=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function l(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"765857e2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/cli_project/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ce3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n=a("7bb1"),o=a("3aa8"),l=a("cbdf"),u=a("9457"),c=(a("b0c0"),{id:"nav"}),i=Object(r["f"])("Home"),s=Object(r["f"])(" | "),f=Object(r["f"])("About");function d(e,t,a,n,o,l){var u=Object(r["z"])("router-link"),d=Object(r["z"])("router-view");return Object(r["t"])(),Object(r["c"])("div",c,[Object(r["g"])(u,{to:"/"},{default:Object(r["H"])((function(){return[i]})),_:1}),s,Object(r["g"])(u,{to:"/about"},{default:Object(r["H"])((function(){return[f]})),_:1}),Object(r["g"])(d),Object(r["f"])(" "+Object(r["C"])(o.name),1)])}var b={data:function(){return{name:"老闆123456的家"}}},v=(a("77df"),a("6b0d")),p=a.n(v);const m=p()(b,[["render",d]]);var h=m,g=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),j=a("cf05"),O=a.n(j),y={class:"home"},k=Object(r["d"])("img",{alt:"Vue logo",src:O.a},null,-1),_={class:"mb-3"},w=Object(r["d"])("label",{for:"email",class:"form-label"},"Email",-1),C=["onClick"],S=Object(r["d"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function P(e,t,a,n,o,l){var u=Object(r["z"])("HelloWorld"),c=Object(r["z"])("Field"),i=Object(r["z"])("error-message"),s=Object(r["z"])("Form");return Object(r["t"])(),Object(r["c"])("div",y,[k,Object(r["g"])(u,{msg:"123456"}),Object(r["g"])(s,{onSubmit:l.onSubmit},{default:Object(r["H"])((function(e){var a=e.errors,n=e.values,l=e.validate;return[Object(r["f"])(Object(r["C"])(a)+" "+Object(r["C"])(n)+" ",1),Object(r["d"])("div",_,[w,Object(r["g"])(c,{id:"email",name:"email",type:"email",class:Object(r["n"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.email=e})},null,8,["class","modelValue"]),Object(r["g"])(i,{name:"email",class:"invalid-feedback"})]),Object(r["d"])("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:l}," 驗證 ",8,C),S]})),_:1},8,["onSubmit"])])}var x={class:"hello"},z=Object(r["e"])('<p data-v-59382f7e> For a guide and recipes on how to configure / customize this project,<br data-v-59382f7e> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>vue-cli documentation</a>. </p><h3 data-v-59382f7e>Installed CLI Plugins</h3><ul data-v-59382f7e><li data-v-59382f7e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-59382f7e>babel</a></li><li data-v-59382f7e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-59382f7e>router</a></li><li data-v-59382f7e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-59382f7e>eslint</a></li></ul><h3 data-v-59382f7e>Essential Links</h3><ul data-v-59382f7e><li data-v-59382f7e><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>Core Docs</a></li><li data-v-59382f7e><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>Forum</a></li><li data-v-59382f7e><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>Community Chat</a></li><li data-v-59382f7e><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-59382f7e>Twitter</a></li><li data-v-59382f7e><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>News</a></li></ul><h3 data-v-59382f7e>Ecosystem</h3><ul data-v-59382f7e><li data-v-59382f7e><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>vue-router</a></li><li data-v-59382f7e><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>vuex</a></li><li data-v-59382f7e><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-59382f7e>vue-devtools</a></li><li data-v-59382f7e><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-59382f7e>vue-loader</a></li><li data-v-59382f7e><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-59382f7e>awesome-vue</a></li></ul>',7);function H(e,t,a,n,o,l){return Object(r["t"])(),Object(r["c"])("div",x,[Object(r["d"])("h1",null,Object(r["C"])(a.msg),1),z])}var E={name:"HelloWorld",props:{msg:String}};a("64a1");const T=p()(E,[["render",H],["__scopeId","data-v-59382f7e"]]);var F=T,M={name:"Home",components:{HelloWorld:F},data:function(){return{user:{}}},methods:{onSubmit:function(){console.log(this.user)}},created:function(){console.log(this)}};const W=p()(M,[["render",P]]);var I=W,L=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],V=Object(g["a"])({history:Object(g["b"])(),routes:L}),q=V;Object(n["e"])("email",o["a"]),Object(n["e"])("required",o["c"]),Object(n["e"])("min",o["b"]),Object(n["d"])({generateMessage:Object(l["a"])({zh_TW:u}),validateOnInput:!0}),Object(l["b"])("zh_TW");var A=Object(r["b"])(h).use(q);A.component("Form",n["c"]),A.component("Field",n["b"]),A.component("ErrorMessage",n["a"]),A.mount("#app")},"64a1":function(e,t,a){"use strict";a("aca1")},"77df":function(e,t,a){"use strict";a("0ce3")},aca1:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a7a3709d.js.map