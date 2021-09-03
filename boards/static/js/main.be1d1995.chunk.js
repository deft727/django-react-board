(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(42),r=a.n(n),l=(a(141),a(142),a(53),a(3)),o=a(11),i=a(13),d=a.n(i),j=a(1);var m=function(){var e=localStorage.tokens,t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(e),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/"}).then((function(e){n(e.data.results)}))}),[]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Board"}),Object(j.jsx)("th",{scope:"col",children:"Topics"}),Object(j.jsx)("th",{scope:"col",children:"Posts"}),Object(j.jsx)("th",{scope:"col",children:"Last Post"}),Object(j.jsx)("th",{scope:"col",children:"Edit"})]})}),s.map((function(t){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(o.b,{className:"link-success",to:{pathname:"/board/".concat(t.id,"/"),froDashboard:!1},children:t.name})})}),Object(j.jsx)("td",{className:"align-middle",children:t.topics_count}),Object(j.jsx)("td",{className:"align-middle",children:t.posts_count}),Object(j.jsx)("td",{className:"align-middle",children:Object(j.jsxs)("small",{children:[t.last_post.message," ",Object(j.jsx)("br",{}),Object(j.jsxs)("a",{href:"",children:["By ",t.last_post.author]})]})}),Object(j.jsx)("td",{children:Object(j.jsx)(o.b,{type:"button",onClick:function(){return a="".concat(t.id),void d()({method:"delete",headers:{Authorization:"Token ".concat(e),Accept:"application/json"},url:"http://127.0.0.1:8000/board/".concat(a,"/")}).then((function(e){}));var a},className:"btn btn-danger",children:"Delete"})})]})},t.id)}))]})})},b=a(12);var h=Object(b.f)((function(e){var t=e.match,a=Object(c.useState)({}),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)([]),m=Object(l.a)(i,2),b=m[0],h=m[1],u=t.params.id,p=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(p),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(u,"/")}).then((function(e){r(e.data),h(e.data.topics)}))}),[u]),Object(j.jsx)("div",{className:"App mt-5",children:Object(j.jsxs)("table",{className:"table table-bordered m-1",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Topic"}),Object(j.jsx)("th",{scope:"col",children:"Starter"}),Object(j.jsx)("th",{scope:"col",children:"Replies"}),Object(j.jsx)("th",{scope:"col",children:"Views"}),Object(j.jsx)("th",{scope:"col",children:"Last Update"})]})}),b.map((function(e){return Object(j.jsx)("tbody",{className:"infinite-item",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("small",{className:"text-muted d-block",children:Object(j.jsx)(o.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(j.jsx)("td",{className:"align-middle",children:e.starter}),Object(j.jsx)("td",{className:"align-middle",children:e.replies}),Object(j.jsx)("td",{className:"align-middle",children:e.views}),Object(j.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})})),u=a(52),p=a(135),x=a(97);var O=Object(b.f)((function(e){var t=Object(c.useState)({}),a=Object(l.a)(t,2),s=(a[0],a[1],localStorage.tokens);return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(o.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"http://127.0.0.1:8000/swagger/",className:"nav-link active text-info",target:"_blank",children:"Documents"})}),s?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/token/login/",froDashboard:!1},children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/users/",froDashboard:!1},children:"Register"})})]}),Object(j.jsx)("li",{className:"nav-item dropdown",children:s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(j.jsx)(x.a.Collapse,{id:"navbar-dark-example",children:Object(j.jsx)(p.a,{children:Object(j.jsxs)(u.a,{id:"nav-dropdown-dark-example",title:"Profile",menuVariant:"dark",children:[Object(j.jsxs)(o.b,{to:{pathname:"/account/",froDashboard:!1},children:["  ",Object(j.jsx)(u.a.Item,{href:"/account/",children:"My profile"})]}),Object(j.jsx)(u.a.Item,{href:"#action/3.2",children:"Change password"}),Object(j.jsx)(u.a.Divider,{}),Object(j.jsx)(u.a.Item,{onClick:function(){d()({method:"post",headers:{Authorization:"Token ".concat(s),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/auth/token/logout/"}).then((function(t){204===t.status&&(window.localStorage.removeItem("tokens"),e.history.push("/auth/token/login/"))}))},children:"Logout"})]})})})]}):null})]})})]})})})}));var f=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(l.a)(a,2),n=(s[0],s[1]),r=Object(c.useState)([]),o=Object(l.a)(r,2),i=o[0],m=o[1],b=t.params.id,h=t.params.pk;return console.log("match",t),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(b,"/topic/").concat(h,"/")}).then((function(e){n(e.data),m(e.data.posts)}))}),[b]),Object(j.jsx)("div",{className:"App bordered mt-4 m-3",children:Object(j.jsxs)("table",{className:"table table-bordered m-2",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"User"}),Object(j.jsx)("th",{scope:"col",children:"Post"}),Object(j.jsx)("th",{scope:"col",children:"Time"})]})}),i.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.created_by}),Object(j.jsx)("td",{children:e.message}),Object(j.jsx)("td",{children:e.created_at})]})},"{p.id}")}))]})})};var g=function(){return Object(j.jsx)("div",{className:"footer fixed-bottom",children:Object(j.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(j.jsx)("section",{className:"",children:Object(j.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(j.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(j.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(j.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(j.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(j.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(j.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(j.jsxs)("p",{children:[Object(j.jsx)(o.b,{className:"text-reset",to:{pathname:"/pages/1/"},children:"Privacy"}),"  /",Object(j.jsx)(o.b,{className:"text-reset",to:{pathname:"/pages/2/"},children:"Terms"})," /",Object(j.jsx)(o.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})]})]}),Object(j.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(j.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(j.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(j.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},v=a(5),N=a(6),k=a(33),w=a(15),y=a(16),S="http://127.0.0.1:8000",C=function(){function e(){Object(v.a)(this,e)}return Object(N.a)(e,[{key:"getCustomers",value:function(){var e="".concat(S,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(S).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(S,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(S,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(S,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(S,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),P=new C,T=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var c;return Object(v.a)(this,a),(c=t.call(this,e)).state={customers:[],nextPageURL:""},c.nextPage=c.nextPage.bind(Object(k.a)(c)),c.handleDelete=c.handleDelete.bind(Object(k.a)(c)),c}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var a=this;P.deleteCustomer({pk:t}).then((function(){var e=a.state.customers.filter((function(e){return e.pk!==t}));a.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),P.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"customers--list",children:[Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"username"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Actions"})]})},"thead"),Object(j.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[t.pk,"  "]}),Object(j.jsx)("td",{children:t.username}),Object(j.jsx)("td",{children:t.email}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{onClick:function(a){return e.handleDelete(a,t.pk)},children:" Delete"}),Object(j.jsx)(o.b,{className:"btn btn-primary",to:{pathname:"/customer/".concat(t.pk,"/")},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),a}(c.Component),E=new C,D=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var c;return Object(v.a)(this,a),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(k.a)(c)),c}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&E.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){E.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){E.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(j.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),a}(c.Component);var U=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(l.a)(a,2),n=s[0],r=s[1],o=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/pages/".concat(o,"/")}).then((function(e){r(e.data)}))}),[o]),Object(j.jsx)("div",{className:"App m-5",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:n.title}),Object(j.jsx)("p",{className:"card-text",children:n.content})]})})})},A=a(28),L=a(47),F=Object(b.f)((function(e){var t=L.a().shape({password:L.b().required("Password is required")});return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(j.jsx)("h2",{children:"Login Page"}),Object(j.jsx)(A.c,{initialValues:{username:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/token/login/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),window.localStorage.setItem("tokens",t.auth_token),e.history.push("/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(j.jsxs)(A.b,{className:"form-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)(A.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)(A.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Login"})]})}})]})})})})),R=Object(b.f)((function(e){var t=L.a().shape({password:L.b().required("Password is required"),email:L.b().required("Email is required")});return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(j.jsx)("h2",{children:"Register Page"}),Object(j.jsx)(A.c,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/users/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),e.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(j.jsxs)(A.b,{className:"form-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)(A.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(A.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)(A.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(j.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Register"})]})}})]})})})}));var I=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(n),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/account/"}).then((function(e){console.log(e.data),s(e.data)}))}),[]),Object(j.jsx)("div",{className:"container m-5 ml-4",children:Object(j.jsx)("div",{className:"page-content page-container ml-4 ",id:"page-content",children:Object(j.jsx)("div",{className:"padding mb-5",children:Object(j.jsx)("div",{className:"row container d-flex justify-content-center mb-5",children:Object(j.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(j.jsx)("div",{className:"card user-card-full",children:Object(j.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(j.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(j.jsxs)("div",{className:"card-block text-center text-white",children:[Object(j.jsx)("div",{className:"m-b-5",children:Object(j.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/user.png",className:"img-radius",alt:"User-Profile-Image"})}),Object(j.jsx)("h6",{className:"f-w-600",children:" "}),Object(j.jsx)("p",{children:"Web "})," ",Object(j.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16",children:" "})]})}),Object(j.jsx)("div",{className:"col-sm-8",children:Object(j.jsxs)("div",{className:"card-block",children:[Object(j.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600 mb-5",children:"Information"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm-6",children:[Object(j.jsx)("p",{className:"m-b-10 f-w-600",children:"Username"}),Object(j.jsxs)("h6",{className:"text-muted f-w-400",children:[a.username," "]})]}),Object(j.jsxs)("div",{className:"col-sm-6",children:[Object(j.jsx)("p",{className:"m-b-10 f-w-600",children:"Email"}),Object(j.jsxs)("h6",{className:"text-muted f-w-400",children:[a.email," "]})]})]})]})})]})})})})})},a.id)})};var _=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(O,{}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/auth/token/login/",component:F}),Object(j.jsx)(b.a,{path:"/auth/users/",component:R}),Object(j.jsx)(b.a,{path:"/pages/:id/",component:U}),Object(j.jsx)(b.a,{path:"/account/",component:I}),Object(j.jsx)(b.a,{path:"/customer-list/",exact:!0,component:T}),Object(j.jsx)(b.a,{path:"/customer/:pk/",component:D}),Object(j.jsx)(b.a,{path:"/customer/",exact:!0,component:D}),Object(j.jsx)(b.a,{path:"/board/:id/topic/:pk/",exect:!0,component:f}),Object(j.jsx)(b.a,{path:"/board/:id/",exect:!0,component:h}),Object(j.jsx)(b.a,{path:"",exect:!0,component:m})]}),Object(j.jsx)(g,{})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,276)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),B()}},[[269,1,2]]]);
//# sourceMappingURL=main.be1d1995.chunk.js.map