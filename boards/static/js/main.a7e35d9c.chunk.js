(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(31),r=c.n(n),l=(c(37),c(38),c(16),c(10)),i=c(4),o=c(5),d=c.n(o),j=c(0);var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/"}).then((function(e){s(e.data)}))}),[]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Board"}),Object(j.jsx)("th",{scope:"col",children:"Topics"}),Object(j.jsx)("th",{scope:"col",children:"Posts"}),Object(j.jsx)("th",{scope:"col",children:"Last Post"}),Object(j.jsx)("th",{scope:"col",children:"Edit"})]})}),c.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(j.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(j.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(j.jsx)("td",{className:"align-middle",children:Object(j.jsxs)("small",{children:[e.last_post.message," ",Object(j.jsx)("br",{}),Object(j.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(j.jsx)("td",{})]})},e.id)}))]})})},h=c(2);var m=Object(h.f)((function(e){var t=e.match,c=Object(a.useState)({}),s=Object(l.a)(c,2),n=s[0],r=s[1],o=Object(a.useState)([]),b=Object(l.a)(o,2),h=b[0],m=b[1],u=t.params.id;return console.log(t),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(u,"/")}).then((function(e){r(e.data),m(e.data.topics)}))}),[u]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Topic"}),Object(j.jsx)("th",{scope:"col",children:"Starter"}),Object(j.jsx)("th",{scope:"col",children:"Replies"}),Object(j.jsx)("th",{scope:"col",children:"Views"}),Object(j.jsx)("th",{scope:"col",children:"Last Update"})]})}),h.map((function(e){return Object(j.jsx)("tbody",{className:"infinite-item",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(j.jsx)("td",{className:"align-middle",children:e.starter}),Object(j.jsx)("td",{className:"align-middle",children:"123"}),Object(j.jsx)("td",{className:"align-middle",children:e.views}),Object(j.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})}));var u=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#",children:"Register"})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Profile"}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"My info"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Change password"})}),Object(j.jsx)("li",{children:Object(j.jsx)("hr",{className:"dropdown-divider"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Logout"})})]})]})]})})]})})})};var x=function(e){var t=e.match,c=Object(a.useState)({}),s=Object(l.a)(c,2),n=(s[0],s[1]),r=Object(a.useState)([]),i=Object(l.a)(r,2),o=i[0],b=i[1],h=t.params.id,m=t.params.pk;return console.log("match",t),Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/topic/").concat(m,"/")}).then((function(e){n(e.data),b(e.data.posts)}))}),[h]),Object(j.jsx)("div",{className:"App bordered mt-4 m-3",children:o.map((function(e){return Object(j.jsxs)("table",{className:"table table-bordered m-2",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"User"}),Object(j.jsx)("th",{scope:"col",children:"Post"}),Object(j.jsx)("th",{scope:"col",children:"Time"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.created_by}),Object(j.jsx)("td",{children:e.message}),Object(j.jsx)("td",{children:e.created_at})]})})]})}))})};var p=function(){return Object(j.jsx)("div",{className:"footer fixed-bottom",children:Object(j.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(j.jsx)("section",{className:"",children:Object(j.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(j.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(j.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(j.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(j.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(j.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(j.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(j.jsxs)("p",{children:[Object(j.jsx)(i.b,{className:"text-reset",to:{pathname:"/pages/privacy/policy/"},children:"Privacy"})," /",Object(j.jsx)(i.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})," /",Object(j.jsx)(i.b,{className:"text-reset",to:{pathname:"/customer/1/"},children:"user 1"})," /",Object(j.jsx)(i.b,{className:"text-reset",to:{pathname:"/customer/"},children:"customer"})]})]}),Object(j.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(j.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(j.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},O=c(13),f=c(14),v=c(11),g=c(18),N=c(17),k="http://127.0.0.1:8000",y=function(){function e(){Object(O.a)(this,e)}return Object(f.a)(e,[{key:"getCustomers",value:function(){var e="".concat(k,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(k).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(k,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),C=new y,w=function(e){Object(g.a)(c,e);var t=Object(N.a)(c);function c(e){var a;return Object(O.a)(this,c),(a=t.call(this,e)).state={customers:[],nextPageURL:""},a.nextPage=a.nextPage.bind(Object(v.a)(a)),a.handleDelete=a.handleDelete.bind(Object(v.a)(a)),a}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this;C.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var c=this;C.deleteCustomer({pk:t}).then((function(){var e=c.state.customers.filter((function(e){return e.pk!==t}));c.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),C.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"customers--list",children:[Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"username"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Actions"})]})},"thead"),Object(j.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[t.pk,"  "]}),Object(j.jsx)("td",{children:t.username}),Object(j.jsx)("td",{children:t.email}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{onClick:function(c){return e.handleDelete(c,t.pk)},children:" Delete"}),Object(j.jsx)(i.b,{className:"btn btn-primary",to:{pathname:"/customer/c.pk/"},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),c}(a.Component),S=new y,P=function(e){Object(g.a)(c,e);var t=Object(N.a)(c);function c(e){var a;return Object(O.a)(this,c),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(f.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&S.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){S.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){S.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(j.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),c}(a.Component);var D=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/customer-list/",exact:!0,component:w}),Object(j.jsx)(h.a,{path:"/customer/:pk/",component:P}),Object(j.jsx)(h.a,{path:"/customer/",exact:!0,component:P}),Object(j.jsx)(h.a,{path:"/board/:id/topic/:pk/",exect:!0,component:x}),Object(j.jsx)(h.a,{path:"/board/:id/",exect:!0,component:m}),Object(j.jsx)(h.a,{path:"",exect:!0,component:b})]}),Object(j.jsx)(p,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.a7e35d9c.chunk.js.map