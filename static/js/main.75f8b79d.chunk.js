(this["webpackJsonphumane-warriors"]=this["webpackJsonphumane-warriors"]||[]).push([[0],{113:function(e,a,t){e.exports=t(144)},118:function(e,a,t){},119:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),l=t.n(o),i=(t(118),t(119),t(45)),c=t(78),m=t(188),u=t(192),s=t(193),p=t(194),d=t(148),g=t(202),f=t(195),h=t(199),E=t(196),v=t(191),b=t(37),y=t(205),w=t(185),C=t(181),x=t(203),k=t(197),W=t(97),N=t.n(W),S=t(198),F=t(201),j=t(204),A=t(186),B=N()((function(e){return{formControl:{margin:e.spacing(2),display:"flex",flexDirection:"column",justifyContent:"center"},selectEmpty:{marginTop:e.spacing(2)}}}));function O(){var e=Object(n.useState)("usd"),a=Object(i.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)("60"),c=Object(i.a)(l,2),m=c[0],u=c[1],s=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Choose An Amount"),r.a.createElement(C.a,{className:s.formControl},r.a.createElement(x.a,{htmlFor:"currency"},"Choose Currency"),r.a.createElement(k.a,{native:!0,value:t,onChange:function(e){o(e.target.value)},inputProps:{name:"currency",id:"currency"}},r.a.createElement("option",{value:"usd"},"US Dollars (USD)"),r.a.createElement("option",{value:"eur"},"Euros (EUR)"),r.a.createElement("option",{value:"gbp"},"British Pound Sterling (GBP)"),r.a.createElement("option",{value:"chf"},"Swiss Franc (CHF)"))),r.a.createElement(F.a,{"aria-label":"amount",name:"amount",value:m,onChange:function(e){return u(e.target.value)}},[[20,1],[60,3],[120,6],[240,12]].map((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.createElement(j.a,{m:2},r.a.createElement(w.a,{value:"".concat(t),control:r.a.createElement(S.a,{name:"amount"}),label:r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h6",gutterTop:!0},"$",t),r.a.createElement("span",null,"Support ",n," ",1===n?"family":"families",". $",t," supports ",n," ",1===n?"family":"families"," with 14 days of essential food & medical supplies."))}))})),r.a.createElement(j.a,{m:2},r.a.createElement(w.a,{value:"20$",checked:"20$"===m,control:r.a.createElement(S.a,{name:"amount"}),label:r.a.createElement(y.a,{id:"standard-bare",defaultValue:"0",type:"number",helperText:"Choose custom amount",margin:"normal",InputProps:{startAdornment:r.a.createElement(A.a,{position:"start"},"$")},size:"small",onChange:function(e){return u(e.target.value)}})}))))}var T=t(187),R=t(200);function D(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Card Details"),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})),r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})),r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})),r.a.createElement(T.a,{item:!0,xs:12,md:6},r.a.createElement(y.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(w.a,{control:r.a.createElement(R.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Optionally add $3 to cover for processing fees"}))))}t(184),t(189),t(190),Object(m.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function U(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"About yourself"),r.a.createElement(T.a,{container:!0,spacing:3},r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name"})),r.a.createElement(T.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name"})),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(y.a,{required:!0,id:"email",name:"email",label:"Email Address",fullWidth:!0})),r.a.createElement(T.a,{item:!0,xs:12},r.a.createElement(w.a,{control:r.a.createElement(R.a,{color:"secondary",name:"stay-updated",value:"yes"}),label:"Stay informed about the Fight Hunger Fight Corona campaign"}))))}function q(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(v.a,{color:"inherit",href:"https://material-ui.com/"},"Humane Warriors")," ",(new Date).getFullYear(),".")}var L=Object(m.a)((function(e){return{appBar:{position:"relative"},layout:Object(c.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(c.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),$=["Choose Amount","Your Information","Donate \ud83d\ude4f"];function P(){var e=L(),a=r.a.useState(0),t=Object(i.a)(a,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(s.a,{position:"absolute",color:"primary",className:e.appBar},r.a.createElement(p.a,null,r.a.createElement(b.a,{variant:"h6",color:"inherit",noWrap:!0},"HUMANE WARRIORS"))),r.a.createElement("main",{className:e.layout},r.a.createElement(d.a,{className:e.paper},r.a.createElement(b.a,{component:"h1",variant:"h4",align:"center"},"Fight Hunger Fight Corona"),r.a.createElement(g.a,{activeStep:n,className:e.stepper},$.map((function(e){return r.a.createElement(f.a,{key:e},r.a.createElement(h.a,null,e))}))),r.a.createElement(r.a.Fragment,null,n===$.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"h5",gutterBottom:!0},"Thank you for your contribution."),r.a.createElement(b.a,{variant:"subtitle1"},"Your donation number is #2001539. We have emailed your donation confirmation, and will send you an update of how your contribution has helped people.")):r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(O,null);case 1:return r.a.createElement(U,null);case 2:return r.a.createElement(D,null);default:throw new Error("Unknown step")}}(n),r.a.createElement("div",{className:e.buttons},0!==n&&r.a.createElement(E.a,{onClick:function(){o(n-1)},className:e.button},"Back"),r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){o(n+1)},className:e.button},n===$.length-1?"Donate":"Next"))))),r.a.createElement(q,null)))}var H=function(){return r.a.createElement(P,null)},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/humane-warriors",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/humane-warriors","/service-worker.js");I?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(a,e)}))}}()}},[[113,1,2]]]);