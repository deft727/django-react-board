(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),l=c(26),n=c.n(l),r=(c(32),c(33),c(13),c(10)),d=c(7),i=c(9),j=c.n(i),o=c(0);var b=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){a(e.data)}))}),[]),Object(o.jsx)("div",{className:"App mt-5",children:Object(o.jsxs)("table",{className:"table table-bordered m-1",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Board"}),Object(o.jsx)("th",{scope:"col",children:"Topics"}),Object(o.jsx)("th",{scope:"col",children:"Posts"}),Object(o.jsx)("th",{scope:"col",children:"Last Post"}),Object(o.jsx)("th",{scope:"col",children:"Edit"})]})}),c.map((function(e){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("small",{className:"text-muted d-block",children:Object(o.jsx)(d.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(o.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(o.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(o.jsx)("td",{className:"align-middle",children:Object(o.jsxs)("small",{children:[e.last_post.message," ",Object(o.jsx)("br",{}),Object(o.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(o.jsx)("td",{})]})},e.id)}))]})})},h=c(2);var m=Object(h.f)((function(e){var t=e.match,c=Object(s.useState)({}),a=Object(r.a)(c,2),l=a[0],n=a[1],i=Object(s.useState)([]),b=Object(r.a)(i,2),h=b[0],m=b[1],x=t.params.id;return console.log(t),Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(x,"/")}).then((function(e){n(e.data),m(e.data.topics)}))}),[x]),Object(o.jsx)("div",{className:"App mt-5",children:Object(o.jsxs)("table",{className:"table table-bordered m-1",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Topic"}),Object(o.jsx)("th",{scope:"col",children:"Starter"}),Object(o.jsx)("th",{scope:"col",children:"Replies"}),Object(o.jsx)("th",{scope:"col",children:"Views"}),Object(o.jsx)("th",{scope:"col",children:"Last Update"})]})}),h.map((function(e){return Object(o.jsx)("tbody",{className:"infinite-item",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("small",{className:"text-muted d-block",children:Object(o.jsx)(d.b,{className:"link-success",to:{pathname:"/board/".concat(l.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(o.jsx)("td",{className:"align-middle",children:e.starter}),Object(o.jsx)("td",{className:"align-middle",children:"123"}),Object(o.jsx)("td",{className:"align-middle",children:e.views}),Object(o.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})}));var x=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Register"})}),Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Profile"}),Object(o.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"My info"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Change password"})}),Object(o.jsx)("li",{children:Object(o.jsx)("hr",{className:"dropdown-divider"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Logout"})})]})]})]})})]})})})};var O=function(e){var t=e.match,c=Object(s.useState)({}),a=Object(r.a)(c,2),l=(a[0],a[1]),n=Object(s.useState)([]),d=Object(r.a)(n,2),i=d[0],b=d[1],h=t.params.id,m=t.params.pk;return console.log("match",t),Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/topic/").concat(m,"/")}).then((function(e){l(e.data),b(e.data.posts)}))}),[h]),Object(o.jsx)("div",{className:"App bordered mt-4 ",children:i.map((function(e){return Object(o.jsxs)("table",{className:"table table-bordered m-2",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"User"}),Object(o.jsx)("th",{scope:"col",children:"Post"}),Object(o.jsx)("th",{scope:"col",children:"Time"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:e.created_at}),Object(o.jsx)("td",{children:e.message}),Object(o.jsx)("td",{children:e.created_at}),Object(o.jsx)("td",{children:e.created_by})]})})]})}))})};var p=function(){return Object(o.jsx)("div",{className:"footer fixed-bottom",children:Object(o.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(o.jsx)("section",{className:"",children:Object(o.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(o.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(o.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(o.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(o.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(o.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(o.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(o.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(o.jsxs)("p",{children:[Object(o.jsx)(d.b,{className:"text-reset",to:{pathname:"/pages/privacy/policy/"},children:"Privacy"})," /",Object(o.jsx)(d.b,{className:"text-reset",to:{pathname:"/pages/privacy/terms/"},children:"Terms"})]})]}),Object(o.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(o.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(o.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(o.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(x,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{path:"/board/:id/topic/:pk/",exect:!0,component:O}),Object(o.jsx)(h.a,{path:"/board/:id/",exect:!0,component:m}),Object(o.jsx)(h.a,{path:"",exect:!0,component:b})]}),Object(o.jsx)(p,{})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),l(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),f()}},[[61,1,2]]]);
//# sourceMappingURL=main.78ab58bb.chunk.js.map