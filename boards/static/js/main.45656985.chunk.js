(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{27:function(t,e,c){},28:function(t,e,c){},56:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c.n(s),a=c(19),i=c.n(a),d=(c(27),c(28),c(10),c(22)),r=c(5),j=c(20),l=c.n(j),b=c(1);var o=function(){var t=Object(s.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1];return Object(s.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("table",{className:"table infinite-container",id:"board-table",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Board"}),Object(b.jsx)("th",{children:"Posts"}),Object(b.jsx)("th",{children:"Topics"}),Object(b.jsx)("th",{children:"Last Post"}),Object(b.jsx)("th",{children:"Edit"})]})}),c.map((function(t){return Object(b.jsx)("tbody",{className:"infinite-item",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("small",{className:"text-muted d-block",children:Object(b.jsx)(r.b,{className:"link-primary",to:{pathname:"/board/".concat(t.id,"/"),froDashboard:!1},children:t.name})})}),Object(b.jsx)("td",{className:"align-middle",children:t.topics_count}),Object(b.jsx)("td",{className:"align-middle",children:t.posts_count}),Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsxs)("small",{children:[t.last_post.message," ",Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"",children:["By ",t.last_post.author]})]})}),Object(b.jsx)("td",{})]})},t.id)}))]})})};var h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(r.a,{children:Object(b.jsx)(o,{})})})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(e){var c=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),s(t),n(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),O()}},[[56,1,2]]]);
//# sourceMappingURL=main.45656985.chunk.js.map