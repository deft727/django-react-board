(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(26),d=a.n(n),i=(a(32),a(33),a(15),a(9)),r=a(8),l=a(10),j=a.n(l),b=a(0);var o=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){s(e.data)}))}),[]),Object(b.jsx)("div",{className:"App pd-5",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Board"}),Object(b.jsx)("th",{children:"Posts"}),Object(b.jsx)("th",{children:"Topics"}),Object(b.jsx)("th",{children:"Last Post"}),Object(b.jsx)("th",{children:"Edit"})]})}),a.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(b.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(b.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsxs)("small",{children:[e.last_post.message," ",Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(b.jsx)("td",{})]})},e.id)}))]})})},h=a(2);var m=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(i.a)(a,2),n=s[0],d=s[1],l=Object(c.useState)([]),o=Object(i.a)(l,2),h=o[0],m=o[1],O=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(O,"/")}).then((function(e){d(e.data),m(e.data.topics)}))}),[O]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Topic"}),Object(b.jsx)("th",{children:"Starter"}),Object(b.jsx)("th",{children:"Replies"}),Object(b.jsx)("th",{children:"Views"}),Object(b.jsx)("th",{children:"Last Update"})]})}),h.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/"),froDashboard:!1},children:e.subject})})}),Object(b.jsx)("td",{className:"align-middle",children:e.starter}),Object(b.jsx)("td",{className:"align-middle",children:"123"}),Object(b.jsx)("td",{className:"align-middle",children:e.views}),Object(b.jsx)("td",{className:"align-middle",children:e.last_updated}),Object(b.jsx)("td",{})]})},e.id)}))]})})};var O=function(){return Object(b.jsx)("div",{className:"App m-5",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark md-4",children:Object(b.jsxs)("div",{className:"container mb-4",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:{pathname:"/board/",froDashboard:!1},children:"Django Boards"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainMenu","aria-controls":"mainMenu","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"mainMenu",children:Object(b.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(b.jsx)("li",{className:"nav-item dropdown",children:Object(b.jsx)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"userMenu"})})})})]})})})};var x=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(i.a)(a,2),n=(s[0],s[1]),d=Object(c.useState)([]),r=Object(i.a)(d,2),l=(r[0],r[1]),o=t.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(o,"/topic/").concat(o,"/")}).then((function(e){n(e.data),l(e.data.posts)}))}),[o]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("p",{children:"asdfsaf"}),"))}"]})};var u=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/board/:id/",exect:!0,component:m}),Object(b.jsx)(h.a,{path:"",exect:!0,component:o}),Object(b.jsx)(h.a,{path:"/board/:id/topic/:id/",exect:!0,component:x})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,d=t.getTTFB;a(e),c(e),s(e),n(e),d(e)}))};d.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.de47928c.chunk.js.map