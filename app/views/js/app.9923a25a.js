(function(e){function t(t){for(var n,a,s=t[0],l=t[1],u=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"bg"};function c(e,t,o,c,a,s){var l=Object(n["i"])("Header");return Object(n["h"])(),Object(n["d"])("div",r,[Object(n["g"])(l)])}var a={class:"headerbg"},s=Object(n["e"])("h1",{class:"welcome"},"Cli-Mate",-1),l={class:"info"},u=Object(n["e"])("h1",{class:"textLog"},"Earth Status: status",-1),i=Object(n["e"])("h1",{class:"textLog"},"Your performance compared to global average:",-1),p=Object(n["e"])("h1",{class:"textLog"},"Log new activity:",-1);function d(e,t,o,r,c,d){var h=Object(n["i"])("LogoutButton"),b=Object(n["i"])("LoginButton"),f=Object(n["i"])("HowToUseButton"),y=Object(n["i"])("ExampleEarth"),g=Object(n["i"])("UserInput");return Object(n["h"])(),Object(n["d"])("header",null,[Object(n["e"])("div",a,[e.user?(Object(n["h"])(),Object(n["c"])(h,{key:0,class:"btnLogin"})):(Object(n["h"])(),Object(n["c"])(b,{key:1,class:"btnLogin"})),s]),Object(n["g"])(f,{class:"btnHow"}),Object(n["g"])(y,{class:"planet"}),Object(n["e"])("div",l,[u,i,p,Object(n["g"])(g)])])}var h={class:"popup",id:"popup-1"},b=Object(n["e"])("div",{class:"overlay"},null,-1),f={class:"content"},y=Object(n["f"])('<div><h1 class="popupTitle">How to Use Cli-Mate</h1><h1 class="popupBody">The purpose of the application is to teach you how to decrease carbon emissions and keep track of their progress.</h1><br><h1 class="popupBody">Throughout the day, log your transportation activities by:</h1><h1 class="popupBody">1. Specifying the mode of transportation</h1><h1 class="popupBody">2. Entering where &quot;from&quot; and &quot;to&quot; you traveled</h1><h1 class="popupBody">3. Submitting the activity</h1><br><h1 class="popupBody">Based off your activity history, we will calculate your performance and show how you have impacted the planet.</h1><h1 class="popupBody">Your status will be displayed visually as the Earth, where the health-state of the Earth will reflect your performance.</h1><h1 class="popupBody">More transportation using automobiles will negatively affect the Earth, lowering your performance and showing a more sickly Earth.</h1><h1 class="popupBody">Whereas transportation by walking/biking will positively affect the Earth, increasing your performance and showing a more healthy Earth.</h1><br><h1 class="popupBody">You can view the &quot;General Information&quot; section to view tips and other ways to help the environment.</h1><br><h1 class="popupBody">Hope you enjoy the app and lets save the Earth together!</h1></div>',1);function g(e,t,o,r,c,a){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",h,[b,Object(n["e"])("div",f,[Object(n["e"])("div",{class:"close-btn",onClick:t[0]||(t[0]=function(e){return a.togglePopup()})},"×"),y])]),Object(n["e"])("button",{class:"btnHow",onClick:t[1]||(t[1]=function(e){return a.togglePopup()})},"How to Use")],64)}var j={name:"HowToUseButton",methods:{togglePopup:function(){document.getElementById("popup-1").classList.toggle("active")}}},m=o("6b0d"),O=o.n(m);const v=O()(j,[["render",g]]);var w=v,B=o("68f4"),E=o.n(B),k={src:E.a};function x(e,t,o,r,c,a){return Object(n["h"])(),Object(n["d"])("img",k)}var L={name:"ExampleEarth"};const A=O()(L,[["render",x]]);var I=A;function T(e,t,o,r,c,a){return Object(n["h"])(),Object(n["d"])("button",null,"Logout")}var H={name:"LogoutButton"};const P=O()(H,[["render",T]]);var U=P;function S(e,t,o,r,c,a){return Object(n["h"])(),Object(n["d"])("button",{class:"btnLogin",onClick:t[0]||(t[0]=function(){return a.GoApp&&a.GoApp.apply(a,arguments)})},"Login")}var M={name:"LoginButton",methods:{GoApp:function(){window.location.href="/google"}}};const q=O()(M,[["render",S]]);var C=q,_=Object(n["e"])("option",{disabled:"",value:""},"Please select one",-1),G=Object(n["e"])("option",null,"Automobile",-1),F=Object(n["e"])("option",null,"Walk",-1),V=Object(n["e"])("option",null,"Bike",-1),Y=[_,G,F,V],J={class:"DestinationEntry"},W=Object(n["e"])("label",{for:"fname"},"From:",-1),D=Object(n["e"])("br",null,null,-1),$=Object(n["e"])("br",null,null,-1),z=Object(n["e"])("label",{for:"lname"},"To:",-1),K=Object(n["e"])("br",null,null,-1);function N(e,t,o,r,c,a){return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["l"])(Object(n["e"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.score.type=e}),class:"TransportSelect",id:"transport"},Y,512),[[n["j"],c.score.type]]),Object(n["e"])("form",J,[W,D,Object(n["l"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.score.fromAddress=e}),id:"from",name:"From",ref:"From"},null,512),[[n["k"],c.score.fromAddress]]),$,z,K,Object(n["l"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.score.toAddress=e}),id:"to",name:"To",ref:"To"},null,512),[[n["k"],c.score.toAddress]])]),Object(n["e"])("button",{class:"btnActivity",onClick:t[3]||(t[3]=function(){return a.EnterInput&&a.EnterInput.apply(a,arguments)})},"Enter Activity")],64)}var Q=o("bc3a"),R=o.n(Q),X={data:function(){return{score:{type:"",fromAddress:"",toAddress:"",performanceIndex:0}}},name:"UserInput",methods:{EnterInput:function(){var e=this,t=document.getElementById("transport").value,o=document.getElementById("from").value,n=document.getElementById("to").value;console.log(t),console.log(o),console.log(n);var r="http://localhost:8080/api/insert";R.a.post(r,this.score).then((function(){e.$router.push("/"),e.score={type:"",fromAddress:"",toAddress:"",performanceIndex:0}})).catch((function(e){console.log(e)}))}}};const Z=O()(X,[["render",N]]);var ee=Z,te={name:"Header",components:{HowToUseButton:w,ExampleEarth:I,LogoutButton:U,LoginButton:C,UserInput:ee}};const oe=O()(te,[["render",d]]);var ne=oe,re={name:"App",components:{Header:ne}};o("e167");const ce=O()(re,[["render",c]]);var ae=ce,se=o("a18c"),le=o.n(se);Object(n["b"])(ae).use(le.a).mount("#login")},"68f4":function(e,t,o){e.exports=o.p+"img/Earth5.263dd320.png"},"7b61":function(e,t,o){},a18c:function(e,t){},e167:function(e,t,o){"use strict";o("7b61")}});
//# sourceMappingURL=app.9923a25a.js.map