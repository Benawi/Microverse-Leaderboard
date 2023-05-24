"use strict";(self.webpackChunkmicroverse_leaderboard=self.webpackChunkmicroverse_leaderboard||[]).push([[179],{28:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&family=VT323&display=swap);"]),i.push([r.id,":root {\r\n  --main-color: #040a04;\r\n  --main-bc-color: white !important;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'VT323', monospace;\r\n  font-size: 24px;\r\n  font-weight: 100;\r\n  color: var(--main-color);\r\n  box-sizing: border-box;\r\n}\r\n\r\n*::selection {\r\n  background-color: white;\r\n  color: var(--main-bc-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-bc-color);\r\n}\r\n\r\nmain {\r\n  max-width: 1200px;\r\n  max-height: 100vh;\r\n}\r\n\r\n/* BUTTON STYLES */\r\n.default-button {\r\n  background-color: var(--main-bc-color);\r\n  border-top: 1px solid var(--main-color);\r\n  border-left: 1px solid var(--main-color);\r\n  border-bottom: 3px solid var(--main-color);\r\n  border-right: 3px solid var(--main-color);\r\n  color: var(--main-color);\r\n  padding: 0.3rem 0.4rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.default-button:active {\r\n  border-top: 3px solid var(--main-color);\r\n  border-left: 3px solid var(--main-color);\r\n  border-bottom: 1px solid var(--main-color);\r\n  border-right: 1px solid var(--main-color);\r\n}\r\n\r\n/* INPUT STYLES */\r\n\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.default-input-style {\r\n  background-color: var(--main-bc-color);\r\n  color: var(--main-color);\r\n  border: none;\r\n  border-bottom: 2px solid var(--main-color);\r\n}\r\n\r\n.default-input-style:focus {\r\n  border: 2px solid var(--main-color);\r\n  outline: none;\r\n}\r\n\r\n.default-input-style::placeholder {\r\n  color: var(--main-color);\r\n}\r\n\r\n/* FONT STYLES */\r\n\r\n.paragraph-style {\r\n  margin: 0 !important;\r\n}\r\n\r\n.underline-effect {\r\n  text-decoration: underline;\r\n  text-decoration-color: var(--main-color);\r\n  text-decoration-thickness: 5px;\r\n  text-underline-offset: 5px;\r\n}\r\n\r\n.title-style {\r\n  font-family: 'Permanent Marker', cursive;\r\n  color: var(--main-color);\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n/* LEFT CONTENT */\r\n.left-content {\r\n  padding: 1rem;\r\n  border-bottom: 3rem;\r\n  margin-bottom: 2rem;\r\n  border: 5px solid var(--main-color);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  min-height: 300px;\r\n  max-height: 450px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.leaderboard-container {\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\n.leaderboard-container::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n.leaderboard-container::-webkit-scrollbar-track {\r\n  background: #dfdddd;\r\n}\r\n\r\n.leaderboard-container::-webkit-scrollbar-thumb {\r\n  background: var(--main-color);\r\n}\r\n\r\n.leaderboard-container::-webkit-scrollbar-thumb:hover {\r\n  background: var(--main-color);\r\n}\r\n\r\n.left-content-header {\r\n  border-bottom: 1px solid var(--secundary-color);\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.leaderboard-rows {\r\n  align-items: center;\r\n  padding: 0.1rem 0.1rem;\r\n  border-bottom: 1px solid var(--secundary-color);\r\n}\r\n\r\n.leaderboard-rows:nth-child(even) {\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.spinner-border {\r\n  top: 50%;\r\n  left: 45%;\r\n  color: var(--main-color);\r\n}\r\n\r\n/* RIGHT CONTENT */\r\n.right-content {\r\n  padding: 1rem;\r\n  border: 5px solid var(--main-color);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n}\r\n\r\n.right-content-header {\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .left-content {\r\n    width: auto;\r\n  }\r\n\r\n  .right-content {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1024px) {\r\n  .left-content {\r\n    margin-bottom: 0;\r\n    margin-right: 2rem;\r\n  }\r\n}\r\n",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},197:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),c=e(569),s=e.n(c),d=e(565),l=e.n(d),u=e(216),p=e.n(u),m=e(589),h=e.n(m),f=e(28),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(){this.data=[],this.scoresURL="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Mc5RFZyAkEklCALEFm3W/scores/"}addNewScore(r,n){return this.obj={user:r,score:n},fetch(this.scoresURL,{method:"POST",body:JSON.stringify(this.obj),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((r=>r.json().result))}#r(){this.data=fetch(this.scoresURL).then((r=>r.json().result))}getScores(){return this.#r(),this.data}}class g{constructor(){this.store=new v,this.leaderboardConatainer=document.getElementById("leaderboard-conatainer")}dispalyLeaderBoard(){this.data=this.store.getData(),this.data.then((r=>{this.leaderboardConatainer.innerHTML="",r.foreach(((r,n)=>{this.leaderboardConatainer.innerHTML+=`<li id="score-${n}" class="leaderboard-row d-flex">\n                    <p>${r.user}</p>\n                    <p>:</p>\n                    <p>${r.score}</p>\n                    </li>`}))}))}}const y=new g,x=new class{constructor(){this.store=new v,this.ui=new g,this.addButton=document.getElementById("add-score")}AddScore(){return this.user=document.getElementById("input-user").value,this.score=document.getElementById("input-score").value,this.user&&this.score?(document.getElementById("input-user").value="",document.getElementById("input-score").value="",this.store.addNewScore(this.user,this.score)):null}AddScoreOnClick(){this.addButton.addEventListener("click",(()=>{this.AddScore().then((()=>{this.ui.dispalyLeaderBoard()}))}))}},w=new class{constructor(){this.store=new v,this.ui=new g,this.refreshButton=document.getElementById("refresh-score")}addRefreshOnClick(){this.refreshButton.addEventListener("click",(()=>{this.ui.dispalyLeaderBoard()}))}};y.dispalyLeaderBoard(),x.addScore(),w.refreshScore()}},r=>{r(r.s=197)}]);