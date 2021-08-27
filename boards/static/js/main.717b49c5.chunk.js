(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),l=c(26),n=c.n(l),i=(c(32),c(33),c(13),c(10)),r=c(8),d=c(9),j=c.n(d),b=c(0);var o=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){s(e.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Board"}),Object(b.jsx)("th",{children:"Posts"}),Object(b.jsx)("th",{children:"Topics"}),Object(b.jsx)("th",{children:"Last Post"}),Object(b.jsx)("th",{children:"Edit"})]})}),c.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(b.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(b.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsxs)("small",{children:[e.last_post.message," ",Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(b.jsx)("td",{})]})},e.id)}))]})})},m=c(2);var h=Object(m.f)((function(e){var t=e.match,c=Object(a.useState)({}),s=Object(i.a)(c,2),l=s[0],n=s[1],d=Object(a.useState)([]),o=Object(i.a)(d,2),m=o[0],h=o[1],x=t.params.id;return console.log(t),Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(x,"/")}).then((function(e){n(e.data),h(e.data.topics)}))}),[x]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Topic"}),Object(b.jsx)("th",{children:"Starter"}),Object(b.jsx)("th",{children:"Replies"}),Object(b.jsx)("th",{children:"Views"}),Object(b.jsx)("th",{children:"Last Update"})]})}),m.map((function(e){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-success",to:{pathname:"/board/".concat(l.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(b.jsx)("td",{className:"align-middle",children:e.starter}),Object(b.jsx)("td",{className:"align-middle",children:"123"}),Object(b.jsx)("td",{className:"align-middle",children:e.views}),Object(b.jsx)("td",{className:"align-middle",children:e.last_updated}),Object(b.jsx)("td",{})]})},e.id)}))]})})}));var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(b.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"}),Object(b.jsx)("a",{className:"nav-link",href:"#",children:"Features"}),Object(b.jsx)("a",{className:"nav-link",href:"#",children:"Pricing"}),Object(b.jsx)("a",{className:"nav-link disabled",href:"#",tabIndex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})};var O=function(e){var t=e.match,c=Object(a.useState)({}),s=Object(i.a)(c,2),l=s[0],n=s[1],r=Object(a.useState)([]),d=Object(i.a)(r,2),o=d[0],m=d[1],h=t.params.id,x=t.params.pk;return console.log("match",t),Object(a.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/topic/").concat(x,"/")}).then((function(e){n(e.data),m(e.data.posts)}))}),[h]),Object(b.jsx)("div",{className:"App",children:o.map((function(e){return Object(b.jsxs)("div",{className:"card border-dark mt-2",children:[Object(b.jsx)("div",{className:"card-header text-white bg-dark py-2 px-3 ",children:l.subject}),Object(b.jsx)("div",{className:"card-body p-3",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("small",{children:"Posts: count"})}),Object(b.jsxs)("div",{className:"col-10",children:[Object(b.jsxs)("div",{className:"row mb-3",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("a",{href:"",children:Object(b.jsx)("strong",{className:"text-muted",children:e.created_by})})}),Object(b.jsx)("div",{className:"col-6 text-right",children:Object(b.jsx)("small",{className:"text-muted",children:e.created_at})})]}),e.message]})]})})]},"{p.id}")}))})};var p=function(){return Object(b.jsx)("div",{className:"App m-5",children:Object(b.jsx)("div",{className:"footer mt-auto",children:Object(b.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(b.jsxs)("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom",children:[Object(b.jsx)("div",{className:"me-5 d-none d-lg-block ",children:Object(b.jsx)("p",{className:"text-center",children:"Center aligned text on all viewport sizes."})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-facebook-f",children:" "})}),Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-twitter",children:" "})}),Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-google",children:" "})}),Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-instagram",children:" "})}),Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-linkedin",children:" "})}),Object(b.jsx)("a",{className:"me-4 text-reset",children:Object(b.jsx)("i",{className:"fab fa-github",children:" "})})]})]}),Object(b.jsx)("section",{className:"",children:Object(b.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(b.jsxs)("div",{className:"row mt-3",children:[Object(b.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(b.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(b.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(b.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(b.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(b.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(b.jsxs)("p",{children:[Object(b.jsx)(r.b,{className:"text-reset",to:{pathname:"/pages/privacy/policy/"},children:"Privacy"}),Object(b.jsx)(r.b,{className:"text-reset",to:{pathname:"/pages/privacy/terms/"},children:"Terms"})]})]}),Object(b.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(b.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(b.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(b.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})})};var u=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(m.c,{children:[Object(b.jsx)(m.a,{path:"/board/:id/topic/:pk/",exect:!0,component:O}),Object(b.jsx)(m.a,{path:"/board/:id/",exect:!0,component:h}),Object(b.jsx)(m.a,{path:"",exect:!0,component:o})]}),Object(b.jsx)(p,{})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),l(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.717b49c5.chunk.js.map