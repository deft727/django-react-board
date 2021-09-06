(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(32),r=a.n(n),o=(a(154),a(155),a(63),a(3)),l=a(12),i=a(14),d=a.n(i),j=a(104),b=a.n(j),m=a(139),h=a(290),u=a(1);var p=function(e){var t=Object(c.useState)(null),a=Object(o.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],p=i[1],x=localStorage.tokens,O=Object(c.useState)([]),f=Object(o.a)(O,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){console.log("tokens",b.a.get("csrftoken")),d()({method:"GET",headers:{Authorization:"Token ".concat(x),Accept:"application/json","Content-Type":"application/json",csrftoken:b.a.get("csrftoken")},url:"http://127.0.0.1:8000/api/board/"}).then((function(e){v(e.data.results)}))}),[]),Object(u.jsxs)("div",{className:"App mt-5",children:[Object(u.jsxs)("table",{className:"table table-bordered m-1",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Board"}),Object(u.jsx)("th",{scope:"col",children:"Topics"}),Object(u.jsx)("th",{scope:"col",children:"Posts"}),Object(u.jsx)("th",{scope:"col",children:"Last Post"}),Object(u.jsx)("th",{scope:"col",children:"Edit"})]})}),g.map((function(e){return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("small",{className:"text-muted d-block",children:Object(u.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(u.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(u.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsxs)("small",{children:[e.last_post.message," ",Object(u.jsx)("br",{}),Object(u.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(u.jsxs)("td",{children:[Object(u.jsx)(m.a,{variant:"primary",onClick:function(){return t=e.id,p(!0),void n(t);var t},children:"Launch Form modal"}),Object(u.jsx)(l.b,{type:"button",onClick:function(){return t="".concat(e.id),void d()({method:"delete",headers:{Authorization:"Token ".concat(x),Accept:"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(t,"/")}).then((function(e){204===e.status&&window.location.reload()}));var t},className:"btn btn-danger",children:"Delete"})]})]})},e.id)}))]}),Object(u.jsx)(h.a,{open:j,boarId:s,handleClose:function(){return p(!1)}})]})},x=a(13);var O=Object(x.f)((function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)([]),j=Object(o.a)(i,2),b=j[0],m=j[1],h=t.params.id,p=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(p),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(h,"/")}).then((function(e){r(e.data),m(e.data.topics)}))}),[h]),Object(u.jsx)("div",{className:"App mt-5",children:Object(u.jsxs)("table",{className:"table table-bordered m-1",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Topic"}),Object(u.jsx)("th",{scope:"col",children:"Starter"}),Object(u.jsx)("th",{scope:"col",children:"Replies"}),Object(u.jsx)("th",{scope:"col",children:"Views"}),Object(u.jsx)("th",{scope:"col",children:"Last Update"})]})}),b.map((function(e){return Object(u.jsx)("tbody",{className:"infinite-item",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("small",{className:"text-muted d-block",children:Object(u.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(u.jsx)("td",{className:"align-middle",children:e.starter}),Object(u.jsx)("td",{className:"align-middle",children:e.replies}),Object(u.jsx)("td",{className:"align-middle",children:e.views}),Object(u.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})})),f=a(62),g=a(147),v=a(108);var N=Object(x.f)((function(e){var t=Object(c.useState)({}),a=Object(o.a)(t,2),s=(a[0],a[1],localStorage.tokens);return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(l.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{href:"http://127.0.0.1:8000/swagger/",className:"nav-link active text-info",target:"_blank",children:"Documents"})}),s?null:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/token/login/",froDashboard:!1},children:"Login"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/users/",froDashboard:!1},children:"Register"})})]}),Object(u.jsx)("li",{className:"nav-item dropdown",children:s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(u.jsx)(v.a.Collapse,{id:"navbar-dark-example",children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(f.a,{id:"nav-dropdown-dark-example",title:"Profile",menuVariant:"dark",children:[Object(u.jsxs)(l.b,{to:{pathname:"/account/",froDashboard:!1},children:["  ",Object(u.jsx)(f.a.Item,{href:"/account/",children:"My profile"})]}),Object(u.jsx)(f.a.Item,{href:"#action/3.2",children:"Change password"}),Object(u.jsx)(f.a.Divider,{}),Object(u.jsx)(f.a.Item,{onClick:function(){d()({method:"post",headers:{Authorization:"Token ".concat(s),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/auth/token/logout/"}).then((function(t){204===t.status&&(window.localStorage.removeItem("tokens"),e.history.push("/auth/token/login/"))}))},children:"Logout"})]})})})]}):null})]})})]})})})}));var k=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=(s[0],s[1]),r=Object(c.useState)([]),l=Object(o.a)(r,2),i=l[0],j=l[1],b=t.params.id,m=t.params.pk;return console.log("match",t),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(b,"/topic/").concat(m,"/")}).then((function(e){n(e.data),j(e.data.posts)}))}),[b]),Object(u.jsx)("div",{className:"App bordered mt-4 m-3",children:Object(u.jsxs)("table",{className:"table table-bordered m-2",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"User"}),Object(u.jsx)("th",{scope:"col",children:"Post"}),Object(u.jsx)("th",{scope:"col",children:"Time"})]})}),i.map((function(e){return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:e.created_by}),Object(u.jsx)("td",{children:e.message}),Object(u.jsx)("td",{children:e.created_at})]})},"{p.id}")}))]})})};var w=function(){return Object(u.jsx)("div",{className:"footer fixed-bottom",children:Object(u.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(u.jsx)("section",{className:"",children:Object(u.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(u.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(u.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(u.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(u.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(u.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(u.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(u.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/1/"},children:"Privacy"}),"  /",Object(u.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/2/"},children:"Terms"})," /",Object(u.jsx)(l.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})]})]}),Object(u.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(u.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(u.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(u.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},y=a(6),S=a(7),C=a(43),P=a(17),T=a(19),E="http://127.0.0.1:8000",D=function(){function e(){Object(y.a)(this,e)}return Object(S.a)(e,[{key:"getCustomers",value:function(){var e="".concat(E,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(E).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(E,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(E,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(E,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(E,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),U=new D,A=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var c;return Object(y.a)(this,a),(c=t.call(this,e)).state={customers:[],nextPageURL:""},c.nextPage=c.nextPage.bind(Object(C.a)(c)),c.handleDelete=c.handleDelete.bind(Object(C.a)(c)),c}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var a=this;U.deleteCustomer({pk:t}).then((function(){var e=a.state.customers.filter((function(e){return e.pk!==t}));a.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),U.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"customers--list",children:[Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"username"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Actions"})]})},"thead"),Object(u.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[t.pk,"  "]}),Object(u.jsx)("td",{children:t.username}),Object(u.jsx)("td",{children:t.email}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:function(a){return e.handleDelete(a,t.pk)},children:" Delete"}),Object(u.jsx)(l.b,{className:"btn btn-primary",to:{pathname:"/customer/".concat(t.pk,"/")},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),a}(c.Component),L=new D,F=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var c;return Object(y.a)(this,a),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(C.a)(c)),c}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&L.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){L.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){L.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(u.jsx)("form",{onSubmit:this.handleSubmit,children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username:"}),Object(u.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(u.jsx)("label",{children:"Email:"}),Object(u.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(u.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),a}(c.Component);var R=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],l=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/pages/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(u.jsx)("div",{className:"App m-5",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:n.title}),Object(u.jsx)("p",{className:"card-text",children:n.content})]})})})},I=a(35),_=a(55),B=Object(x.f)((function(e){var t=_.a().shape({password:_.b().required("Password is required")});return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(u.jsx)("h2",{children:"Login Page"}),Object(u.jsx)(I.c,{initialValues:{username:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/token/login/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),window.localStorage.setItem("tokens",t.auth_token),e.history.push("/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(u.jsxs)(I.b,{className:"form-container",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)(I.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)(I.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(u.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Login"})]})}})]})})})})),q=Object(x.f)((function(e){var t=_.a().shape({password:_.b().required("Password is required"),email:_.b().required("Email is required")});return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(u.jsx)("h2",{children:"Register Page"}),Object(u.jsx)(I.c,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/users/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),e.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(u.jsxs)(I.b,{className:"form-container",children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)(I.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(u.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)(I.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(u.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)(I.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(u.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Register"})]})}})]})})})}));var z=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1],n=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(n),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/account/"}).then((function(e){console.log(e.data),s(e.data)}))}),[]),Object(u.jsx)("div",{className:"container mt-5",children:Object(u.jsx)("div",{className:"page-content page-container ml-4 ",id:"page-content",children:Object(u.jsx)("div",{className:"padding mb-5",children:Object(u.jsx)("div",{className:"row container d-flex justify-content-center mb-5",children:Object(u.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(u.jsx)("div",{className:"card user-card-full",children:Object(u.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(u.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(u.jsxs)("div",{className:"card-block text-center text-white",children:[Object(u.jsx)("div",{className:"m-b-5",children:Object(u.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/user.png",className:"img-radius",alt:"User-Profile-Image"})}),Object(u.jsx)("h6",{className:"f-w-600",children:" "}),Object(u.jsx)("p",{children:"Web "})," ",Object(u.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16",children:" "})]})}),Object(u.jsx)("div",{className:"col-sm-8",children:Object(u.jsxs)("div",{className:"card-block",children:[Object(u.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600 mb-5",children:"Information"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-sm-6",children:[Object(u.jsx)("p",{className:"m-b-10 f-w-600",children:"Username"}),Object(u.jsxs)("h6",{className:"text-muted f-w-400",children:[a.username," "]})]}),Object(u.jsxs)("div",{className:"col-sm-6",children:[Object(u.jsx)("p",{className:"m-b-10 f-w-600",children:"Email"}),Object(u.jsxs)("h6",{className:"text-muted f-w-400",children:[a.email," "]})]})]})]})})]})})})})})},a.id)})};var G=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(N,{}),Object(u.jsxs)(x.c,{children:[Object(u.jsx)(x.a,{path:"/auth/token/login/",component:B}),Object(u.jsx)(x.a,{path:"/auth/users/",component:q}),Object(u.jsx)(x.a,{path:"/pages/:id/",component:R}),Object(u.jsx)(x.a,{path:"/account/",component:z}),Object(u.jsx)(x.a,{path:"/customer-list/",exact:!0,component:A}),Object(u.jsx)(x.a,{path:"/customer/:pk/",component:F}),Object(u.jsx)(x.a,{path:"/customer/",exact:!0,component:F}),Object(u.jsx)(x.a,{path:"/board/:id/topic/:pk/",exect:!0,component:k}),Object(u.jsx)(x.a,{path:"/board/:id/",exect:!0,component:O}),Object(u.jsx)(x.a,{path:"",exect:!0,component:p})]}),Object(u.jsx)(w,{})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),M()}},[[282,1,2]]]);
//# sourceMappingURL=main.09b4763c.chunk.js.map