(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{32:function(e,c,t){},33:function(e,c,t){},61:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),l=t(26),n=t.n(l),r=(t(32),t(33),t(13),t(10)),i=t(7),d=t(9),j=t.n(d),o=t(0);var b=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){a(e.data)}))}),[]),Object(o.jsx)("div",{className:"App mt-5",children:Object(o.jsxs)("table",{className:"table table-bordered m-1",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Board"}),Object(o.jsx)("th",{scope:"col",children:"Topics"}),Object(o.jsx)("th",{scope:"col",children:"Posts"}),Object(o.jsx)("th",{scope:"col",children:"Last Post"}),Object(o.jsx)("th",{scope:"col",children:"Edit"})]})}),t.map((function(e){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("small",{className:"text-muted d-block",children:Object(o.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(o.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(o.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(o.jsx)("td",{className:"align-middle",children:Object(o.jsxs)("small",{children:[e.last_post.message," ",Object(o.jsx)("br",{}),Object(o.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(o.jsx)("td",{})]})},e.id)}))]})})},m=t(2);var h=Object(m.f)((function(e){var c=e.match,t=Object(s.useState)({}),a=Object(r.a)(t,2),l=a[0],n=a[1],d=Object(s.useState)([]),b=Object(r.a)(d,2),m=b[0],h=b[1],x=c.params.id;return console.log(c),Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(x,"/")}).then((function(e){n(e.data),h(e.data.topics)}))}),[x]),Object(o.jsx)("div",{className:"App mt-5",children:Object(o.jsxs)("table",{className:"table table-bordered m-1",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Topic"}),Object(o.jsx)("th",{scope:"col",children:"Starter"}),Object(o.jsx)("th",{scope:"col",children:"Replies"}),Object(o.jsx)("th",{scope:"col",children:"Views"}),Object(o.jsx)("th",{scope:"col",children:"Last Update"})]})}),m.map((function(e){return Object(o.jsx)("tbody",{className:"infinite-item",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("small",{className:"text-muted d-block",children:Object(o.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(l.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(o.jsx)("td",{className:"align-middle",children:e.starter}),Object(o.jsx)("td",{className:"align-middle",children:"123"}),Object(o.jsx)("td",{className:"align-middle",children:e.views}),Object(o.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})}));var x=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(i.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Register"})}),Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Profile"}),Object(o.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"My info"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Change password"})}),Object(o.jsx)("li",{children:Object(o.jsx)("hr",{className:"dropdown-divider"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"Logout"})})]})]})]})})]})})})};var O=function(e){var c=e.match,t=Object(s.useState)({}),a=Object(r.a)(t,2),l=a[0],n=a[1],i=Object(s.useState)([]),d=Object(r.a)(i,2),b=d[0],m=d[1],h=c.params.id,x=c.params.pk;return console.log("match",c),Object(s.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/topic/").concat(x,"/")}).then((function(e){n(e.data),m(e.data.posts)}))}),[h]),Object(o.jsx)("div",{className:"App",children:b.map((function(e){return Object(o.jsxs)("div",{className:"card border-dark mt-2",children:[Object(o.jsx)("div",{className:"card-header text-white bg-dark py-2 px-3 ",children:l.subject}),Object(o.jsx)("div",{className:"card-body p-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("small",{children:"Posts: count"})}),Object(o.jsxs)("div",{className:"col-10",children:[Object(o.jsxs)("div",{className:"row mb-3",children:[Object(o.jsx)("div",{className:"col-6",children:Object(o.jsx)("a",{href:"",children:Object(o.jsx)("strong",{className:"text-muted",children:e.created_by})})}),Object(o.jsx)("div",{className:"col-6 text-right",children:Object(o.jsx)("small",{className:"text-muted",children:e.created_at})})]}),e.message]})]})})]},"{p.id}")}))})};var p=function(){return Object(o.jsx)("div",{className:"App mt-5",children:Object(o.jsx)("div",{className:"footer mt-auto",children:Object(o.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(o.jsxs)("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom",children:[Object(o.jsx)("div",{className:"me-5 d-none d-lg-block ",children:Object(o.jsx)("p",{className:"text-center",children:"Center aligned text on all viewport sizes."})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-facebook-f",children:" "})}),Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-twitter",children:" "})}),Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-google",children:" "})}),Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-instagram",children:" "})}),Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-linkedin",children:" "})}),Object(o.jsx)("a",{className:"me-4 text-reset",children:Object(o.jsx)("i",{className:"fab fa-github",children:" "})})]})]}),Object(o.jsx)("section",{className:"",children:Object(o.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(o.jsxs)("div",{className:"row mt-3",children:[Object(o.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(o.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(o.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(o.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(o.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(o.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(o.jsxs)("p",{children:[Object(o.jsx)(i.b,{className:"text-reset",to:{pathname:"/pages/privacy/policy/"},children:"Privacy"}),Object(o.jsx)(i.b,{className:"text-reset",to:{pathname:"/pages/privacy/terms/"},children:"Terms"})]})]}),Object(o.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(o.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(o.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(o.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})})};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(x,{}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/board/:id/topic/:pk/",exect:!0,component:O}),Object(o.jsx)(m.a,{path:"/board/:id/",exect:!0,component:h}),Object(o.jsx)(m.a,{path:"",exect:!0,component:b})]}),Object(o.jsx)(p,{})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,l=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),l(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.04ebc5b6.chunk.js.map