(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(91),r=a.n(n),o=(a(101),a(102),a(37),a(12)),l=a(6),i=a(11),d=a.n(i),j=a(0);var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){var e=window.localStorage.getItem("tokens");console.log("tokens",e),d()({method:"GET",headers:{authorization:"Token ".concat(e),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/"}).then((function(e){s(e.data.results)}))}),[]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Board"}),Object(j.jsx)("th",{scope:"col",children:"Topics"}),Object(j.jsx)("th",{scope:"col",children:"Posts"}),Object(j.jsx)("th",{scope:"col",children:"Last Post"}),Object(j.jsx)("th",{scope:"col",children:"Edit"})]})}),a.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(j.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(j.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(j.jsx)("td",{className:"align-middle",children:Object(j.jsxs)("small",{children:[e.last_post.message," ",Object(j.jsx)("br",{}),Object(j.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(j.jsx)("td",{})]})},e.id)}))]})})},h=a(5);var m=Object(h.f)((function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)([]),b=Object(o.a)(i,2),h=b[0],m=b[1],u=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token 09eb3d0f9df3605e37d81d35427704687517a2bc"},url:"http://127.0.0.1:8000/api/board/".concat(u,"/")}).then((function(e){r(e.data),m(e.data.topics)}))}),[u]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Topic"}),Object(j.jsx)("th",{scope:"col",children:"Starter"}),Object(j.jsx)("th",{scope:"col",children:"Replies"}),Object(j.jsx)("th",{scope:"col",children:"Views"}),Object(j.jsx)("th",{scope:"col",children:"Last Update"})]})}),h.map((function(e){return Object(j.jsx)("tbody",{className:"infinite-item",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(j.jsx)("td",{className:"align-middle",children:e.starter}),Object(j.jsx)("td",{className:"align-middle",children:e.replies}),Object(j.jsx)("td",{className:"align-middle",children:e.views}),Object(j.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})}));var u=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"http://127.0.0.1:8000/swagger/",className:"nav-link active text-info",target:"_blank",children:"Documents"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/token/login/",froDashboard:!1},children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/users/",froDashboard:!1},children:"Register"})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Profile"}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"My info"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"dropdown-item",href:"#",children:"Change password"})}),Object(j.jsx)("li",{children:Object(j.jsx)("hr",{className:"dropdown-divider"})}),Object(j.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/logout/",froDashboard:!1},children:"Logout"})]})]})]})})]})})})};var p=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=(s[0],s[1]),r=Object(c.useState)([]),l=Object(o.a)(r,2),i=l[0],b=l[1],h=t.params.id,m=t.params.pk;return console.log("match",t),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(h,"/topic/").concat(m,"/")}).then((function(e){n(e.data),b(e.data.posts)}))}),[h]),Object(j.jsx)("div",{className:"App bordered mt-4 m-3",children:Object(j.jsxs)("table",{className:"table table-bordered m-2",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"User"}),Object(j.jsx)("th",{scope:"col",children:"Post"}),Object(j.jsx)("th",{scope:"col",children:"Time"})]})}),i.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.created_by}),Object(j.jsx)("td",{children:e.message}),Object(j.jsx)("td",{children:e.created_at})]})},"{p.id}")}))]})})};var x=function(){return Object(j.jsx)("div",{className:"footer fixed-bottom",children:Object(j.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(j.jsx)("section",{className:"",children:Object(j.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(j.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(j.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(j.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(j.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(j.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(j.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(j.jsxs)("p",{children:[Object(j.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/1/"},children:"Privacy"}),"  /",Object(j.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/2/"},children:"Terms"})," /",Object(j.jsx)(l.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})]})]}),Object(j.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(j.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(j.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},O=a(2),f=a(3),g=a(20),v=a(9),N=a(10),k="http://127.0.0.1:8000",w=function(){function e(){Object(O.a)(this,e)}return Object(f.a)(e,[{key:"getCustomers",value:function(){var e="".concat(k,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(k).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(k,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(k,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),y=new w,S=function(e){Object(v.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(O.a)(this,a),(c=t.call(this,e)).state={customers:[],nextPageURL:""},c.nextPage=c.nextPage.bind(Object(g.a)(c)),c.handleDelete=c.handleDelete.bind(Object(g.a)(c)),c}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var a=this;y.deleteCustomer({pk:t}).then((function(){var e=a.state.customers.filter((function(e){return e.pk!==t}));a.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),y.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"customers--list",children:[Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"username"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Actions"})]})},"thead"),Object(j.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[t.pk,"  "]}),Object(j.jsx)("td",{children:t.username}),Object(j.jsx)("td",{children:t.email}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{onClick:function(a){return e.handleDelete(a,t.pk)},children:" Delete"}),Object(j.jsx)(l.b,{className:"btn btn-primary",to:{pathname:"/customer/".concat(t.pk,"/")},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),a}(c.Component),C=new w,P=function(e){Object(v.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(O.a)(this,a),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(g.a)(c)),c}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&C.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){C.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){C.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(j.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),a}(c.Component);var D=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],l=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/pages/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(j.jsx)("div",{className:"App m-5",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:n.title}),Object(j.jsx)("p",{className:"card-text",children:n.content})]})})})},T=a(18),E=a(28),L=Object(h.f)((function(e){var t=E.a().shape({password:E.b().required("Password is required")});return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(j.jsx)("h2",{children:"Login Page"}),Object(j.jsx)(T.c,{initialValues:{username:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/token/login/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),window.localStorage.setItem("tokens",t.auth_token),e.history.push("/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(j.jsxs)(T.b,{className:"form-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)(T.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)(T.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Login"})]})}})]})})})})),U=Object(h.f)((function(e){var t=E.a().shape({password:E.b().required("Password is required"),email:E.b().required("Email is required")});return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(j.jsx)("h2",{children:"Register Page"}),Object(j.jsx)(T.c,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/users/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),e.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(j.jsxs)(T.b,{className:"form-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)(T.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(T.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)(T.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Register"})]})}})]})})})}));var R=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/auth/token/login/",component:L}),Object(j.jsx)(h.a,{path:"/auth/users/",component:U}),Object(j.jsx)(h.a,{path:"/pages/:id/",component:D}),Object(j.jsx)(h.a,{path:"/customer-list/",exact:!0,component:S}),Object(j.jsx)(h.a,{path:"/customer/:pk/",component:P}),Object(j.jsx)(h.a,{path:"/customer/",exact:!0,component:P}),Object(j.jsx)(h.a,{path:"/board/:id/topic/:pk/",exect:!0,component:p}),Object(j.jsx)(h.a,{path:"/board/:id/",exect:!0,component:m}),Object(j.jsx)(h.a,{path:"",exect:!0,component:b})]}),Object(j.jsx)(x,{})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),F()}},[[227,1,2]]]);
//# sourceMappingURL=main.5ee0f0a4.chunk.js.map