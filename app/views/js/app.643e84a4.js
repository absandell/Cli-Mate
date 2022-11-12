(function(t){function e(e){for(var n,a,s=e[0],u=e[1],l=e[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);i&&i(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},c=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var i=u;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"bg"};function c(t,e,o,c,a,s){var u=Object(n["i"])("Header");return Object(n["h"])(),Object(n["d"])("div",r,[Object(n["g"])(u)])}var a={class:"headerbg"},s=Object(n["e"])("h1",{class:"welcome"},"Cli-Mate",-1),u={class:"info"};function l(t,e,o,r,c,l){var i=Object(n["i"])("LogoutButton"),p=Object(n["i"])("LoginButton"),d=Object(n["i"])("HowToUseButton"),b=Object(n["i"])("UserInput");return Object(n["h"])(),Object(n["d"])("header",null,[Object(n["e"])("div",a,[t.user?(Object(n["h"])(),Object(n["c"])(i,{key:0,class:"btnLogin"})):(Object(n["h"])(),Object(n["c"])(p,{key:1,class:"btnLogin"})),s]),Object(n["g"])(d,{class:"btnHow"}),Object(n["e"])("div",u,[Object(n["g"])(b)])])}var i={class:"popup",id:"popup-1"},p=Object(n["e"])("div",{class:"overlay"},null,-1),d={class:"content"},b=Object(n["f"])('<div><h1 class="popupTitle">How to Use Cli-Mate</h1><h1 class="popupBody">The purpose of the application is to teach you how to decrease carbon emissions and keep track of their progress.</h1><br><h1 class="popupBody">Throughout the day, log your transportation activities by:</h1><h1 class="popupBody">1. Specifying the mode of transportation</h1><h1 class="popupBody">2. Entering where &quot;from&quot; and &quot;to&quot; you traveled</h1><h1 class="popupBody">3. Submitting the activity</h1><br><h1 class="popupBody">Based off your activity history, we will calculate your performance and show how you have impacted the planet.</h1><h1 class="popupBody">Your status will be displayed visually as the Earth, where the health-state of the Earth will reflect your performance.</h1><h1 class="popupBody">More transportation using automobiles will negatively affect the Earth, lowering your performance and showing a more sickly Earth.</h1><h1 class="popupBody">Whereas transportation by walking/biking will positively affect the Earth, increasing your performance and showing a more healthy Earth.</h1><br><h1 class="popupBody">Hope you enjoy the app and lets save the Earth together!</h1></div>',1);function h(t,e,o,r,c,a){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",i,[p,Object(n["e"])("div",d,[Object(n["e"])("div",{class:"close-btn",onClick:e[0]||(e[0]=function(t){return a.togglePopup()})},"×"),b])]),Object(n["e"])("button",{class:"btnHow",onClick:e[1]||(e[1]=function(t){return a.togglePopup()})},"How to Use")],64)}var g={name:"HowToUseButton",methods:{togglePopup:function(){document.getElementById("popup-1").classList.toggle("active")}}},f=o("d959"),v=o.n(f);const y=v()(g,[["render",h]]);var j=y;function O(t,e,o,r,c,a){return Object(n["h"])(),Object(n["d"])("button",null,"Logout")}var m={name:"LogoutButton"};const w=v()(m,[["render",O]]);var B=w;function E(t,e,o,r,c,a){return Object(n["h"])(),Object(n["d"])("button",{class:"btnLogin",onClick:e[0]||(e[0]=function(){return a.GoApp&&a.GoApp.apply(a,arguments)})},"Login")}var L={name:"LoginButton",methods:{GoApp:function(){window.location.href="/google"}}};const k=v()(L,[["render",E]]);var P=k,A=o("fb2e"),S=o.n(A),I=Object(n["e"])("img",{class:"planet",src:S.a,id:"earth"},null,-1),H=Object(n["e"])("h1",{class:"textLog",id:"status"},"Earth Status: Neutral",-1),T=Object(n["e"])("h1",{class:"textLog"},"Log new activity:",-1),x=Object(n["e"])("option",{disabled:"",value:""},"Please select one",-1),U=Object(n["e"])("option",null,"Automobile",-1),C=Object(n["e"])("option",null,"Walk",-1),M=Object(n["e"])("option",null,"Bike",-1),_=[x,U,C,M],G={class:"DestinationEntry"},q=Object(n["e"])("label",{for:"fname"},"Distance:",-1),D=Object(n["e"])("br",null,null,-1),V=Object(n["e"])("br",null,null,-1);function J(t,e,o,r,c,a){var s=Object(n["i"])("PrevLogButton");return Object(n["h"])(),Object(n["d"])(n["a"],null,[I,H,T,Object(n["l"])(Object(n["e"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.score.type=t}),class:"TransportSelect",id:"transport"},_,512),[[n["j"],c.score.type]]),Object(n["e"])("form",G,[q,D,Object(n["l"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.score.Address=t}),id:"distance",name:"Distance",ref:"Distance"},null,512),[[n["k"],c.score.Address]]),V]),Object(n["e"])("button",{class:"btnActivity",onClick:e[2]||(e[2]=function(){return a.EnterInput&&a.EnterInput.apply(a,arguments)})},"Enter Activity"),Object(n["g"])(s)],64)}var N=o("bc3a"),W=o.n(N),Y={class:"popup",id:"popup-3"},$=Object(n["e"])("div",{class:"overlay"},null,-1),z={class:"content"},F=Object(n["e"])("div",null,[Object(n["e"])("h1",{class:"popupTitle"},"Activity Log")],-1);function K(t,e,o,r,c,a){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",Y,[$,Object(n["e"])("div",z,[Object(n["e"])("div",{class:"close-btn",onClick:e[0]||(e[0]=function(t){return a.togglePopup()})},"×"),F])]),Object(n["e"])("button",{class:"btnPrev",onClick:e[1]||(e[1]=function(t){return a.togglePopup()})},"Activity Log")],64)}var Q={name:"PrevLogButton",methods:{togglePopup:function(){document.getElementById("popup-3").classList.toggle("active")}}};const R=v()(Q,[["render",K]]);var X=R,Z={components:{PrevLogButton:X},data:function(){return{score:{type:"",Address:""}}},name:"UserInput",props:{},computed:{},methods:{EnterInput:function(){var t=this,e=document.getElementById("transport").value,o=document.getElementById("distance").value,n=document.getElementById("status").value,r="";console.log(e),console.log(o);var c=411,a=0,s=parseInt(o),u=1,l=s*u,i=l/3.79,p=8887,d=i*p,b=d*s;a="Automobile"==e?-1*b/c:1*b/c,a<-500?(n="Earth Status: Very Bad",r="../assets/Earth1.png"):a<-100?(n="Earth Status: Bad",r="../assets/Earth2.png"):a<0&&a<100?(n="Earth Status: Neutral",r="../assets/Earth3.png"):a>500?(n="Earth Status: Very Good",r="../assets/Earth5.png"):(n="Earth Status: Good",r="../assets/Earth4.png"),document.getElementById("status").innerHTML=n,console.log(n),console.log(r),console.log(a);var h="http://localhost:8080/api/insert";W.a.post(h,this.score).then((function(){t.$router.push("/"),t.score={type:"",Address:""}})).catch((function(t){console.log(t)}))}}};const tt=v()(Z,[["render",J]]);var et=tt,ot={name:"Header",components:{HowToUseButton:j,LogoutButton:B,LoginButton:P,UserInput:et}};const nt=v()(ot,[["render",l]]);var rt=nt,ct={name:"App",components:{Header:rt}};o("e167");const at=v()(ct,[["render",c]]);var st=at;Object(n["b"])(st).mount("#login")},b172:function(t,e,o){},e167:function(t,e,o){"use strict";o("b172")},fb2e:function(t,e,o){t.exports=o.p+"img/Earth4.74f4c00f.png"}});
//# sourceMappingURL=app.643e84a4.js.map