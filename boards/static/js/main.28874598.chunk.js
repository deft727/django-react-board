(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(33),r=a.n(n),o=(a(155),a(156),a(56),a(3)),l=a(12),i=a(14),d=a.n(i),j=a(104),m=a.n(j),b=a(144),h=a(290),u=a(22),p=a(36),x=a(1);var O=function(e){var t=e.open,a=e.handleClose,c=e.boarD,n=e.props,r=p.a().shape({name:p.b().required("Password is required"),description:p.b().required("Email is required")});return Object(x.jsx)("div",{children:Object(x.jsxs)(h.a,{show:t,onHide:a,children:[Object(x.jsx)(h.a.Header,{closeButton:!0,children:Object(x.jsx)(h.a.Title,{children:" title id board"})}),Object(x.jsx)(h.a.Body,{children:Object(x.jsx)(s.a.Fragment,{children:Object(x.jsx)(u.c,{initialValues:{name:"",email:"",password:""},onSubmit:function(e){var t="http://127.0.0.1:8000/api/board/".concat(c.id,"/");fetch(t,{method:"path",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){console.log(e),n.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:r,enableReinitialize:!0,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)(u.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)(u.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(u.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Register"})]})}})})}),Object(x.jsxs)(h.a.Footer,{children:[Object(x.jsx)(b.a,{variant:"secondary",onClick:a,children:"Close"}),Object(x.jsx)(b.a,{variant:"submit",onClick:a,children:"Submit"})]})]})})};var f=function(e){var t=Object(c.useState)(null),a=Object(o.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],h=i[1],u=localStorage.tokens,p=Object(c.useState)([]),f=Object(o.a)(p,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){console.log("tokens",m.a.get("csrftoken")),d()({method:"GET",headers:{Authorization:"Token ".concat(u),Accept:"application/json","Content-Type":"application/json",csrftoken:m.a.get("csrftoken")},url:"http://127.0.0.1:8000/api/board/"}).then((function(e){v(e.data.results)}))}),[]),Object(x.jsxs)("div",{className:"App mt-5",children:[Object(x.jsxs)("table",{className:"table table-bordered m-1",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Board"}),Object(x.jsx)("th",{scope:"col",children:"Topics"}),Object(x.jsx)("th",{scope:"col",children:"Posts"}),Object(x.jsx)("th",{scope:"col",children:"Last Post"}),Object(x.jsx)("th",{scope:"col",children:"Edit"})]})}),g.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("small",{className:"text-muted d-block",children:Object(x.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(x.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(x.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(x.jsx)("td",{className:"align-middle",children:Object(x.jsxs)("small",{children:[e.last_post.message," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),Object(x.jsxs)("td",{children:[Object(x.jsx)(b.a,{variant:"primary",onClick:function(){return t=e,console.log(t),h(!0),void n(t);var t},children:"Edit"})," \xa0 \xa0",Object(x.jsx)(l.b,{type:"button",onClick:function(){return t="".concat(e.id),void d()({method:"delete",headers:{Authorization:"Token ".concat(u),Accept:"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(t,"/")}).then((function(e){204===e.status&&window.location.reload()}));var t},className:"btn btn-danger",children:"Delete"})]})]})},e.id)}))]}),j&&Object(x.jsx)(O,{open:j,boarD:s,handleClose:function(){return h(!1)}})]})},g=a(13);var v=Object(g.f)((function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)([]),j=Object(o.a)(i,2),m=j[0],b=j[1],h=t.params.id,u=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(u),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(h,"/")}).then((function(e){r(e.data),b(e.data.topics)}))}),[h]),Object(x.jsx)("div",{className:"App mt-5",children:Object(x.jsxs)("table",{className:"table table-bordered m-1",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Topic"}),Object(x.jsx)("th",{scope:"col",children:"Starter"}),Object(x.jsx)("th",{scope:"col",children:"Replies"}),Object(x.jsx)("th",{scope:"col",children:"Views"}),Object(x.jsx)("th",{scope:"col",children:"Last Update"})]})}),m.map((function(e){return Object(x.jsx)("tbody",{className:"infinite-item",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("small",{className:"text-muted d-block",children:Object(x.jsx)(l.b,{className:"link-success",to:{pathname:"/board/".concat(n.id,"/topic/").concat(e.id,"/")},children:e.subject})})}),Object(x.jsx)("td",{className:"align-middle",children:e.starter}),Object(x.jsx)("td",{className:"align-middle",children:e.replies}),Object(x.jsx)("td",{className:"align-middle",children:e.views}),Object(x.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]})})})),N=a(63),k=a(147),w=a(108);var y=Object(g.f)((function(e){var t=Object(c.useState)({}),a=Object(o.a)(t,2),s=(a[0],a[1],localStorage.tokens);return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)(l.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(x.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"http://127.0.0.1:8000/swagger/",className:"nav-link active text-info",target:"_blank",children:"Documents"})}),s?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/token/login/",froDashboard:!1},children:"Login"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/users/",froDashboard:!1},children:"Register"})})]}),Object(x.jsx)("li",{className:"nav-item dropdown",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(x.jsx)(w.a.Collapse,{id:"navbar-dark-example",children:Object(x.jsx)(k.a,{children:Object(x.jsxs)(N.a,{id:"nav-dropdown-dark-example",title:"Profile",menuVariant:"dark",children:[Object(x.jsxs)(l.b,{to:{pathname:"/account/",froDashboard:!1},children:["  ",Object(x.jsx)(N.a.Item,{href:"/account/",children:"My profile"})]}),Object(x.jsx)(N.a.Item,{href:"#action/3.2",children:"Change password"}),Object(x.jsx)(N.a.Divider,{}),Object(x.jsx)(N.a.Item,{onClick:function(){d()({method:"post",headers:{Authorization:"Token ".concat(s),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/auth/token/logout/"}).then((function(t){204===t.status&&(window.localStorage.removeItem("tokens"),e.history.push("/auth/token/login/"))}))},children:"Logout"})]})})})]}):null})]})})]})})})}));var S=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=(s[0],s[1]),r=Object(c.useState)([]),l=Object(o.a)(r,2),i=l[0],j=l[1],m=t.params.id,b=t.params.pk;return console.log("match",t),Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(m,"/topic/").concat(b,"/")}).then((function(e){n(e.data),j(e.data.posts)}))}),[m]),Object(x.jsx)("div",{className:"App bordered mt-4 m-3",children:Object(x.jsxs)("table",{className:"table table-bordered m-2",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"User"}),Object(x.jsx)("th",{scope:"col",children:"Post"}),Object(x.jsx)("th",{scope:"col",children:"Time"})]})}),i.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:e.created_by}),Object(x.jsx)("td",{children:e.message}),Object(x.jsx)("td",{children:e.created_at})]})},"{p.id}")}))]})})};var C=function(){return Object(x.jsx)("div",{className:"footer fixed-bottom",children:Object(x.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(x.jsx)("section",{className:"",children:Object(x.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(x.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(x.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(x.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(x.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(x.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(x.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(x.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(x.jsxs)("p",{children:[Object(x.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/1/"},children:"Privacy"}),"  /",Object(x.jsx)(l.b,{className:"text-reset",to:{pathname:"/pages/2/"},children:"Terms"})," /",Object(x.jsx)(l.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})]})]}),Object(x.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(x.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(x.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(x.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},P=a(6),T=a(7),E=a(44),D=a(18),U=a(19),F="http://127.0.0.1:8000",A=function(){function e(){Object(P.a)(this,e)}return Object(T.a)(e,[{key:"getCustomers",value:function(){var e="".concat(F,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(F).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(F,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(F,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(F,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(F,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),L=new A,R=function(e){Object(D.a)(a,e);var t=Object(U.a)(a);function a(e){var c;return Object(P.a)(this,a),(c=t.call(this,e)).state={customers:[],nextPageURL:""},c.nextPage=c.nextPage.bind(Object(E.a)(c)),c.handleDelete=c.handleDelete.bind(Object(E.a)(c)),c}return Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var a=this;L.deleteCustomer({pk:t}).then((function(){var e=a.state.customers.filter((function(e){return e.pk!==t}));a.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),L.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"customers--list",children:[Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"username"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Actions"})]})},"thead"),Object(x.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[t.pk,"  "]}),Object(x.jsx)("td",{children:t.username}),Object(x.jsx)("td",{children:t.email}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{onClick:function(a){return e.handleDelete(a,t.pk)},children:" Delete"}),Object(x.jsx)(l.b,{className:"btn btn-primary",to:{pathname:"/customer/".concat(t.pk,"/")},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),a}(c.Component),q=new A,B=function(e){Object(D.a)(a,e);var t=Object(U.a)(a);function a(e){var c;return Object(P.a)(this,a),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(E.a)(c)),c}return Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&q.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){q.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){q.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(x.jsx)("form",{onSubmit:this.handleSubmit,children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username:"}),Object(x.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(x.jsx)("label",{children:"Email:"}),Object(x.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(x.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),a}(c.Component);var I=function(e){var t=e.match,a=Object(c.useState)({}),s=Object(o.a)(a,2),n=s[0],r=s[1],l=t.params.id;return Object(c.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/pages/".concat(l,"/")}).then((function(e){r(e.data)}))}),[l]),Object(x.jsx)("div",{className:"App m-5",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:n.title}),Object(x.jsx)("p",{className:"card-text",children:n.content})]})})})},_=Object(g.f)((function(e){var t=p.a().shape({password:p.b().required("Password is required")});return Object(x.jsx)(s.a.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(x.jsx)("h2",{children:"Login Page"}),Object(x.jsx)(u.c,{initialValues:{username:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/token/login/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),window.localStorage.setItem("tokens",t.auth_token),e.history.push("/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)(u.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(u.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Login"})]})}})]})})})})),z=Object(g.f)((function(e){var t=p.a().shape({password:p.b().required("Password is required"),email:p.b().required("Email is required")});return Object(x.jsx)(s.a.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(x.jsx)("h2",{children:"Register Page"}),Object(x.jsx)(u.c,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/users/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),e.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:t,enableReinitialize:!0,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)(u.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)(u.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(u.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Register"})]})}})]})})})}));var G=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1],n=localStorage.tokens;return Object(c.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(n),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/account/"}).then((function(e){console.log(e.data),s(e.data)}))}),[]),Object(x.jsx)("div",{className:"container mt-5",children:Object(x.jsx)("div",{className:"page-content page-container ml-4 ",id:"page-content",children:Object(x.jsx)("div",{className:"padding mb-5",children:Object(x.jsx)("div",{className:"row container d-flex justify-content-center mb-5",children:Object(x.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(x.jsx)("div",{className:"card user-card-full",children:Object(x.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(x.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(x.jsxs)("div",{className:"card-block text-center text-white",children:[Object(x.jsx)("div",{className:"m-b-5",children:Object(x.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/user.png",className:"img-radius",alt:"User-Profile-Image"})}),Object(x.jsx)("h6",{className:"f-w-600",children:" "}),Object(x.jsx)("p",{children:"Web "})," ",Object(x.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16",children:" "})]})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsxs)("div",{className:"card-block",children:[Object(x.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600 mb-5",children:"Information"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-sm-6",children:[Object(x.jsx)("p",{className:"m-b-10 f-w-600",children:"Username"}),Object(x.jsxs)("h6",{className:"text-muted f-w-400",children:[a.username," "]})]}),Object(x.jsxs)("div",{className:"col-sm-6",children:[Object(x.jsx)("p",{className:"m-b-10 f-w-600",children:"Email"}),Object(x.jsxs)("h6",{className:"text-muted f-w-400",children:[a.email," "]})]})]})]})})]})})})})})},a.id)})};var J=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(y,{}),Object(x.jsxs)(g.c,{children:[Object(x.jsx)(g.a,{path:"/auth/token/login/",component:_}),Object(x.jsx)(g.a,{path:"/auth/users/",component:z}),Object(x.jsx)(g.a,{path:"/pages/:id/",component:I}),Object(x.jsx)(g.a,{path:"/account/",component:G}),Object(x.jsx)(g.a,{path:"/customer-list/",exact:!0,component:R}),Object(x.jsx)(g.a,{path:"/customer/:pk/",component:B}),Object(x.jsx)(g.a,{path:"/customer/",exact:!0,component:B}),Object(x.jsx)(g.a,{path:"/board/:id/topic/:pk/",exect:!0,component:S}),Object(x.jsx)(g.a,{path:"/board/:id/",exect:!0,component:v}),Object(x.jsx)(g.a,{path:"",exect:!0,component:f})]}),Object(x.jsx)(C,{})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),M()}},[[283,1,2]]]);
//# sourceMappingURL=main.28874598.chunk.js.map