(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(26),d=c.n(n),i=(c(32),c(33),c(15),c(9)),r=c(8),l=c(10),j=c.n(l),b=c(0);var o=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){s(e.data)}))}),[]),Object(b.jsx)("div",{className:"App pd-5",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Board"}),Object(b.jsx)("th",{children:"Posts"}),Object(b.jsx)("th",{children:"Topics"}),Object(b.jsx)("th",{children:"Last Post"}),Object(b.jsx)("th",{children:"Edit"})]})}),c.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(b.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(b.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsxs)("small",{children:[e.last_post.message," ",Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(b.jsx)("td",{})]})},e.id)}))]})})},h=c(2);var m=function(e){var t=e.match,c=Object(a.useState)({}),s=Object(i.a)(c,2),n=s[0],d=s[1],l=Object(a.useState)([]),o=Object(i.a)(l,2),h=o[0],m=o[1],O=t.params.id;return Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(O,"/")}).then((function(e){d(e.data),m(e.data.topics)}))}),[O]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Topic"}),Object(b.jsx)("th",{children:"Starter"}),Object(b.jsx)("th",{children:"Replies"}),Object(b.jsx)("th",{children:"Views"}),Object(b.jsx)("th",{children:"Last Update"})]})}),h.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/"),froDashboard:!1},children:e.subject})})}),Object(b.jsx)("td",{className:"align-middle",children:e.starter}),Object(b.jsx)("td",{className:"align-middle",children:"123"}),Object(b.jsx)("td",{className:"align-middle",children:e.views}),Object(b.jsx)("td",{className:"align-middle",children:e.last_updated}),Object(b.jsx)("td",{})]})},e.id)}))]})})};var O=function(){return Object(b.jsx)("div",{className:"App m-5",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark md-4",children:Object(b.jsxs)("div",{className:"container mb-4",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:{pathname:"/board/",froDashboard:!1},children:"Django Boards"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainMenu","aria-controls":"mainMenu","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"mainMenu",children:Object(b.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(b.jsx)("li",{className:"nav-item dropdown",children:Object(b.jsx)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"userMenu"})})})})]})})})};var x=function(e){var t=e.match,c=Object(a.useState)({}),s=Object(i.a)(c,2),n=s[0],d=s[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),o=l[0],h=l[1],m=t.params.id;return Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(m,"/topic/").concat(m,"/")}).then((function(e){d(e.data),h(e.data.posts)}))}),[m]),Object(b.jsx)("div",{className:"App",children:o.map((function(e){return Object(b.jsxs)("div",{className:"card border-dark mt-2",children:[Object(b.jsx)("div",{className:"card-header text-white bg-dark py-2 px-3 ",children:n.subject}),Object(b.jsx)("div",{className:"card-body p-3",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("small",{children:"Posts: count"})}),Object(b.jsxs)("div",{className:"col-10",children:[Object(b.jsxs)("div",{className:"row mb-3",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("a",{href:"",children:Object(b.jsx)("strong",{className:"text-muted",children:e.created_by})})}),Object(b.jsx)("div",{className:"col-6 text-right",children:Object(b.jsx)("small",{className:"text-muted",children:e.created_at})})]}),e.message]})]})})]},"{p.id}")}))})};var u=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/board/:id/",exect:!0,component:m}),Object(b.jsx)(h.a,{path:"",exect:!0,component:o}),Object(b.jsx)(h.a,{path:"/board/:id/topic/:id/",exect:!0,component:x})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,d=t.getTTFB;c(e),a(e),s(e),n(e),d(e)}))};d.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.5379798b.chunk.js.map