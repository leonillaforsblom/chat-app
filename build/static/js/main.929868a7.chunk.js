(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(338)},215:function(e,t){},337:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(27),l=a.n(o),i=a(91),s=a.n(i),u=a(147),m=a(23),d=a(148),p=a.n(d),g=a(94),f=a(59),E=a(158),v=a(149),b=a(150),h=a.n(b),w=Object(c.createContext)(),O={General:[{from:"Me",msg:"Hello!"},{from:"You",msg:"Let's chat!"}],Javascript:[],Frameworks:[]},N=function(e,t){var a=t.payload,n=a.from,c=a.msg,r=a.topic;switch(t.type){case"RECEIVE MESSAGE":return Object(v.a)({},e,Object(f.a)({},r,[].concat(Object(E.a)(e[r]),[{from:n,msg:c}])));default:return e}},j=function(e){n.emit("chat",e)},S=function(e){var t=Object(c.useReducer)(N,O),a=Object(m.a)(t,2),o=a[0],l=a[1];n||(n=h()(":3001")).on("chat",function(e){l({type:"RECEIVE MESSAGE",payload:e})});var i=window.localStorage.getItem("loggedIn"),s=JSON.parse(i);return r.a.createElement(w.Provider,{value:{allChats:o,sendChatAction:j,user:s}},e.children)},C=a(345),k=a(339),y=function(e){var t=e.topic,a=Object(c.useContext)(w),n=a.user,o=a.sendChatAction,l=Object(c.useState)(""),i=Object(m.a)(l,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"inputContainer"},r.a.createElement("form",null,r.a.createElement(C.a,{className:"inputField",value:s,placeholder:"New message",onChange:function(e){u(e.target.value)},onKeyPress:function(e){s.length<1||"Enter"===e.key&&(e.preventDefault(),o({from:n,msg:s,topic:t}),u(""))},autoFocus:!0}),r.a.createElement(k.a,{className:"actionBtn",basic:!0,color:"teal",content:"Send",onClick:function(e){e.preventDefault(),s.length<1||(o({from:n,msg:s,topic:t}),u(""))}})))},I=function(e){var t=e.topics,a=e.selectTopic,n=t.map(function(e,t){return r.a.createElement(k.a,{id:"topicSelector",color:"teal",key:t,toggle:!0,active:!1,onClick:function(e){return a(e.target.innerText)}},e)});return r.a.createElement("div",{className:"topicDiv"},n)},x=function(){var e=Object(c.useContext)(w).allChats,t=Object.keys(e),a=Object(c.useState)(t[0]),n=Object(m.a)(a,2),o=n[0],l=n[1];return r.a.createElement("div",{className:"appContainer"},r.a.createElement(I,{topics:t,selectTopic:l}),r.a.createElement("div",{className:"chatInputWrapper"},r.a.createElement("div",{className:"chatBox"},e[o].map(function(e,t){return r.a.createElement("div",{key:t,className:"message"},r.a.createElement(g.a,{key:t,color:"teal"},e.from),r.a.createElement("span",{className:"messageText",key:e.msg},e.msg))})),r.a.createElement(y,{topic:o})))},J=function(e){var t=e.username,a=e.usernameHandler,n=e.login;return r.a.createElement("div",{className:"loginPage"},r.a.createElement("form",{onSubmit:n},r.a.createElement(C.a,{className:"inputField",value:t,placeholder:"Write a username",onChange:a,autoFocus:!0}),r.a.createElement(k.a,{type:"submit",className:"actionBtn",basic:!0,color:"teal",content:"Login"})))},B=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),l=Object(m.a)(o,2),i=l[0],d=l[1];Object(c.useEffect)(function(){var e=window.localStorage.getItem("loggedIn");if(e){var t=JSON.parse(e);d(t)}},[]);var g=function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.length<1)){e.next=3;break}return e.abrupt("return");case 3:if("Enter"!==t.key){e.next=6;break}return e.next=6,p.a.post("/login",{userName:a});case 6:window.localStorage.setItem("loggedIn",JSON.stringify(a)),window.location.reload();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,null===i?r.a.createElement("div",null,r.a.createElement("div",{className:"loginHeader"},r.a.createElement("h1",null,"Login and chat with others")),r.a.createElement(J,{username:a,usernameHandler:function(e){n(e.target.value)},login:g})):r.a.createElement("div",null,r.a.createElement("div",{className:"headerContainer"},r.a.createElement("h1",null,"Select a topic and start chatting!"),r.a.createElement(k.a,{className:"actionBtn",basic:!0,color:"teal",content:"Logout",onClick:function(){return window.localStorage.removeItem("loggedIn"),void window.location.reload()}})),r.a.createElement(S,null,r.a.createElement(x,null))))};a(337);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.929868a7.chunk.js.map