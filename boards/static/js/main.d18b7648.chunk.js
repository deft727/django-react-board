(this["webpackJsonpboards-ui"]=this["webpackJsonpboards-ui"]||[]).push([[0],{159:function(e,t,c){},160:function(e,t,c){},287:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(36),r=c.n(s),o=(c(159),c(160),c(45),c(3)),i=c(13),l=c(18),d=c.n(l),j=c(141),b=c.n(j),h=c(147),m=c(293),u=c(10),p=c(19),x=c(1);var O=function(e){var t=e.open,c=e.handleClose,a=e.boarD,s=(e.props,localStorage.tokens),r=p.a().shape({name:p.b().required("name is wrong"),description:p.b().required("Description is wrong")});return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{show:t,onHide:c,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsxs)(m.a.Title,{children:[" Edit '",a.name,"'"]})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(u.c,{initialValues:{name:a.name,description:a.description},onSubmit:function(e){var t="http://127.0.0.1:8000/api/board/".concat(a.id,"/");fetch(t,{method:"put",body:JSON.stringify(e),headers:{Authorization:"Token ".concat(s),"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))},validationSchema:r,enableReinitialize:!0,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",children:"name"}),Object(x.jsx)(u.a,{type:"text",name:"name",id:"name",className:"form-control ",placeholder:"Name"}),e.touched.name&&e.errors.name&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.name})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)(u.a,{type:"text",name:"description",id:"description",className:"form-control",placeholder:"Description"}),e.touched.description&&e.errors.description&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.description})]}),Object(x.jsxs)(m.a.Footer,{children:[Object(x.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"submit "})]})]})}})})})]})})};var f=function(e){var t=e.open,c=e.handleCloseBoard,a=(e.props,localStorage.tokens),s=p.a().shape({name:p.b().required("name is wrong"),description:p.b().required("Description is wrong")});return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{show:t,onHide:c,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsx)(m.a.Title,{children:" New Board"})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(u.c,{initialValues:{Name:"",Description:""},onSubmit:function(e){fetch("http://127.0.0.1:8000/api/board/",{method:"post",body:JSON.stringify(e),headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))},validationSchema:s,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",children:"name"}),Object(x.jsx)(u.a,{type:"text",name:"name",id:"name",className:"form-control ",placeholder:"Name"}),e.touched.name&&e.errors.name&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.name})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)(u.a,{type:"text",name:"description",id:"description",className:"form-control",placeholder:"Description"}),e.touched.description&&e.errors.description&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.description})]}),Object(x.jsxs)(m.a.Footer,{children:[Object(x.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Create"})]})]})}})})})]})})},g={"-":"Delete","+":"Create","~":"Update"};var v=function(e){var t=e.openInfo,c=e.handleCloseInfo,a=e.myhistory;return e.props,localStorage.tokens,Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{show:t,onHide:c,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsx)(m.a.Title,{children:" Last changes "})}),Object(x.jsxs)(m.a.Body,{children:[Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{className:"thead-dark",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Object"}),Object(x.jsx)("th",{scope:"col",children:"Changes"}),Object(x.jsx)("th",{scope:"col",children:"Time"})]})}),a.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[" ",e.name]}),Object(x.jsxs)("td",{children:[" ",g[e.history_type]]}),Object(x.jsxs)("td",{children:[" ",e.history_date]})]})},e.id)}))]}),Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(m.a.Footer,{children:Object(x.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"})})})]})]})})};var N=function(e){var t=Object(a.useState)(null),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),l=Object(o.a)(r,2),j=l[0],m=l[1],u=localStorage.tokens,p=Object(a.useState)(!1),g=Object(o.a)(p,2),N=g[0],y=g[1],w=Object(a.useState)(!1),k=Object(o.a)(w,2),C=k[0],S=k[1],T=Object(a.useState)([]),F=Object(o.a)(T,2),P=F[0],D=F[1],E=Object(a.useState)([]),A=Object(o.a)(E,2),B=A[0],U=A[1];return Object(a.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(u),Accept:"application/json","Content-Type":"application/json",csrftoken:b.a.get("csrftoken")},url:"http://127.0.0.1:8000/api/board/"}).then((function(e){U(e.data.results),D(e.data.history)}))}),[]),Object(x.jsxs)("div",{className:"App mt-5",children:[u?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"d-flex p-2",children:[Object(x.jsx)(h.a,{variant:"success",onClick:function(){y(!0)},children:"New Board"})," \xa0",Object(x.jsx)(h.a,{variant:"secondary",onClick:function(){S(!0)},children:" Last info "}),N&&Object(x.jsx)(f,{open:N,handleCloseBoard:function(){return y(!1)}}),C&&Object(x.jsx)(v,{openInfo:C,handleCloseInfo:function(){return S(!1)},myhistory:P})]})}):null,Object(x.jsxs)("table",{className:"table table-bordered m-1",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Board"}),Object(x.jsx)("th",{scope:"col",children:"Topics"}),Object(x.jsx)("th",{scope:"col",children:"Posts"}),Object(x.jsx)("th",{scope:"col",children:"Last Post"}),u?Object(x.jsx)("th",{scope:"col",children:"Edit"}):null]})}),B.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("small",{className:"text-muted d-block",children:Object(x.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(e.id,"/"),froDashboard:!1},children:e.name})})}),Object(x.jsx)("td",{className:"align-middle",children:e.topics_count}),Object(x.jsx)("td",{className:"align-middle",children:e.posts_count}),Object(x.jsx)("td",{className:"align-middle",children:Object(x.jsxs)("small",{children:[e.last_post.message," ",Object(x.jsx)("br",{}),Object(x.jsxs)("a",{href:"",children:["By ",e.last_post.author]})]})}),u?Object(x.jsxs)("td",{children:[Object(x.jsx)(h.a,{variant:"primary",onClick:function(){return t=e,console.log(t),m(!0),void s(t);var t},children:"Edit"})," \xa0 \xa0",Object(x.jsx)(i.b,{type:"button",onClick:function(){return t="".concat(e.id),void d()({method:"delete",headers:{Authorization:"Token ".concat(u),Accept:"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(t,"/")}).then((function(e){204===e.status&&window.location.reload()}));var t},className:"btn btn-danger",children:"Delete"})]}):null]})},e.id)}))]}),j&&Object(x.jsx)(O,{open:j,boarD:n,handleClose:function(){return m(!1)}})]})},y=c(15),w=c(148),k=c.n(w),C=c(152),S=c(7),T=c(8),F=c(16),P=c(17),D=function(e){Object(F.a)(c,e);var t=Object(P.a)(c);function c(){var e;Object(S.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,thumb:void 0},e}return Object(T.a)(c,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.file&&this.setState({loading:!0},(function(){var c=new FileReader;c.onloadend=function(){t.setState({loading:!1,thumb:c.result})},c.readAsDataURL(e.file)}))}},{key:"render",value:function(){var e=this.props.file,t=this.state,c=t.loading,a=t.thumb;return e?c?Object(x.jsx)("p",{children:"loading..."}):Object(x.jsx)("img",{src:a,alt:e.name,className:"img-thumbnail mt-2",height:200,width:200}):null}}]),c}(n.a.Component),E=c(18);var A=Object(y.f)((function(e){var t=e.openTopic,c=e.handleCloseTopic,a=(e.history,e.match.params.id),s=localStorage.tokens,r=p.a().shape({subject:p.b().required("subject is wrong")},[a]),o={width:"100%",height:"auto",borderWidth:2,borderColor:"rgb(102, 102, 102)",borderStyle:"dashed",borderRadius:5};return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{show:t,onHide:c,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsx)(m.a.Title,{children:" New Topic "})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(u.c,{initialValues:{subject:""},onSubmit:function(e){var t=new k.a;t.append("file",e.file,e.file.name),t.append("subject",e.subject),console.log("values",e.file.name);var n="http://127.0.0.1:8000/api/board/".concat(a,"/new/");E.post(n,t,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data",Authorization:"Token ".concat(s)}}).then((function(e){if(201!==e.status)throw alert("error"),c(),new Error("Something went wrong");alert("Success"),c()}))},validationSchema:r,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",children:"subject"}),Object(x.jsx)(u.a,{type:"text",name:"subject",id:"subject",className:"form-control ",placeholder:"subject"}),e.touched.subject&&e.errors.subject&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.subject}),Object(x.jsx)(C.a,{style:o,accept:"image/*",onDrop:function(t){0!==t.length&&e.setFieldValue("files",e.files.concat(t))},children:function(t){var c=t.isDragActive;t.isDragReject,t.acceptedFiles,t.rejectedFiles;return c?"This file is authorized":e.files.map((function(e,t){return Object(x.jsx)(D,{file:e},t)}))}})]}),Object(x.jsxs)(m.a.Footer,{children:[Object(x.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Create "})]})]})}})})})]})})}));var B=Object(y.f)((function(e){var t=e.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)([]),j=Object(o.a)(l,2),b=j[0],m=j[1],u=t.params.id,p=localStorage.tokens,O=Object(a.useState)(!1),f=Object(o.a)(O,2),g=f[0],v=f[1];return Object(a.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(p),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/board/".concat(u,"/")}).then((function(e){r(e.data),m(e.data.topics)}))}),[u,g]),Object(x.jsxs)("div",{className:"App mt-5",children:[p?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a,{variant:"success ",className:"d-flex m-1 ml-2",onClick:function(){v(!0)},children:"New Topic"}),g&&Object(x.jsx)(A,{openTopic:g,handleCloseTopic:function(){return v(!1)}})]}):null,b.length?Object(x.jsxs)("table",{className:"table table-bordered m-1",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"Topic"}),Object(x.jsx)("th",{scope:"col",children:"Starter"}),Object(x.jsx)("th",{scope:"col",children:"Replies"}),Object(x.jsx)("th",{scope:"col",children:"Views"}),Object(x.jsx)("th",{scope:"col",children:"Last Update"})]})}),b.map((function(e){return Object(x.jsx)("tbody",{className:"infinite-item",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("small",{className:"text-muted d-block",children:p?Object(x.jsx)(i.b,{className:"link-success",to:{pathname:"/board/".concat(s.id,"/topic/").concat(e.id,"/")},children:e.subject}):null})}),Object(x.jsx)("td",{className:"align-middle",children:e.starter}),Object(x.jsx)("td",{className:"align-middle",children:e.replies}),Object(x.jsx)("td",{className:"align-middle",children:e.views}),Object(x.jsx)("td",{className:"align-middle",children:e.last_updated})]})},e.id)}))]}):Object(x.jsx)("p",{className:"text-center fs-3",children:"Content doesnt exist, create new topic"})]})})),U=c(67),L=c(153),R=c(110);var q=Object(y.f)((function(e){var t=Object(a.useState)({}),c=Object(o.a)(t,2),n=(c[0],c[1],localStorage.tokens);return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)(i.b,{className:"navbar-brand",to:{pathname:"/",froDashboard:!1},children:"Django Boards"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon",children:" "})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(x.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"http://127.0.0.1:8000/swagger/",className:"nav-link active text-info",target:"_blank",children:"Documents"})}),n?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/token/login/",froDashboard:!1},children:"Login"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/auth/users/",froDashboard:!1},children:"Register"})})]}),Object(x.jsx)("li",{className:"nav-item dropdown",children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(R.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(x.jsx)(R.a.Collapse,{id:"navbar-dark-example",children:Object(x.jsx)(L.a,{children:Object(x.jsxs)(U.a,{id:"nav-dropdown-dark-example",title:"Profile",menuVariant:"dark",children:[Object(x.jsxs)(i.b,{to:{pathname:"/account/",froDashboard:!1},children:["  ",Object(x.jsx)(U.a.Item,{href:"/account/",children:"My profile"})]}),Object(x.jsx)(U.a.Item,{href:"#action/3.2",children:"Change password"}),Object(x.jsx)(U.a.Divider,{}),Object(x.jsx)(U.a.Item,{onClick:function(){d()({method:"post",headers:{Authorization:"Token ".concat(n),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/auth/token/logout/"}).then((function(e){204===e.status&&(window.localStorage.removeItem("tokens"),window.location.reload())}))},children:"Logout"})]})})})]}):null})]})})]})})})})),I=c(109);var z=Object(y.f)((function(e){var t=e.openPost,c=e.handleClosePost,a=(e.history,e.match),s=a.params.id,r=a.params.pk,o=localStorage.tokens,i=p.a().shape({message:p.b().required("message is wrong")},[s,r]);return Object(x.jsx)("div",{children:Object(x.jsxs)(m.a,{show:t,onHide:c,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsx)(m.a.Title,{children:" New Post "})}),Object(x.jsx)(m.a.Body,{children:Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)(u.c,{initialValues:{message:""},onSubmit:function(e){var t="http://127.0.0.1:8000/api/board/".concat(s,"/topic/").concat(r,"/");fetch(t,{method:"post",body:JSON.stringify(e),headers:{Authorization:"Token ".concat(o),"Content-Type":"application/json"}}).then((function(e){if(201!==e.status)throw c(),window.location.reload(),new Error("Something went wrong");c()})).then((function(e){})).catch((function(e){console.log(e)}))},validationSchema:i,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",children:"message"}),Object(x.jsx)(u.a,{type:"text",name:"message",id:"message",className:"form-control ",placeholder:"message"}),e.touched.message&&e.errors.message&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.message})]}),Object(x.jsxs)(m.a.Footer,{children:[Object(x.jsx)(h.a,{variant:"secondary",onClick:c,children:"Close"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Create "})]})]})}})})})]})})}));var H=function(e){var t=e.match,c=(localStorage.tokens,Object(a.useState)({})),n=Object(o.a)(c,2),s=(n[0],n[1]),r=Object(a.useState)([]),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(a.useState)([]),m=Object(o.a)(b,2),u=m[0],p=m[1],O=t.params.id,f=t.params.pk,g=Object(a.useState)(!1),v=Object(o.a)(g,2),N=v[0],y=v[1],w=function(){y(!0)};return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/board/".concat(O,"/topic/").concat(f,"/")}).then((function(e){s(e.data),j(e.data.posts),p(e.data.photos)}))}),[O,N]),Object(x.jsxs)("div",{className:"App bordered mt-3 ",children:[Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-sm",children:Object(x.jsx)(I.a,{children:u.map((function(e){return Object(x.jsx)(I.a.Item,{children:Object(x.jsx)("img",{className:"d-block",src:e.file,alt:"First slide"})})}))})})})}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("table",{className:"table table-bordered m-2",children:[Object(x.jsxs)("thead",{children:["  ",N&&Object(x.jsx)(z,{openPost:N,handleClosePost:function(){return y(!1)}}),l.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.a,{placement:"right",variant:"btn btn-primary mt-2",onClick:function(){return w()},children:"New Post"}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"User"}),Object(x.jsx)("th",{scope:"col",children:"Post"}),Object(x.jsx)("th",{scope:"col",children:"Time"})]}),"  "]}):Object(x.jsxs)("strong",{children:["No contents create new ",Object(x.jsx)(h.a,{variant:"btn btn-link",onClick:function(){return w()},children:"post"})]})]}),l.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:e.created_by}),Object(x.jsx)("td",{children:e.message}),Object(x.jsx)("td",{children:e.created_at})]})},"{p.id}")}))]})})]})};var _=function(){return Object(x.jsx)("div",{className:"footer",style:{marginTop:"265px"},children:Object(x.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted mt-auto",children:[Object(x.jsx)("section",{className:"",children:Object(x.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(x.jsxs)("div",{className:"row mt-4 pt-4",children:[Object(x.jsxs)("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[Object(x.jsxs)("h6",{className:"text-uppercase fw-bold mb-4",children:[Object(x.jsx)("i",{className:"fas fa-gem me-3",children:" "}),"Company name"]}),Object(x.jsx)("p",{children:"Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(x.jsxs)("div",{className:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4",children:[Object(x.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Privacy policy"}),Object(x.jsxs)("p",{children:[Object(x.jsx)(i.b,{className:"text-reset",to:{pathname:"/pages/1/"},children:"Privacy"}),"  /",Object(x.jsx)(i.b,{className:"text-reset",to:{pathname:"/pages/2/"},children:"Terms"})," /",Object(x.jsx)(i.b,{className:"text-reset",to:{pathname:"/customer-list/"},children:"customers"})]})]}),Object(x.jsxs)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",children:[Object(x.jsx)("h6",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-home me-3",children:" "})," New York, NY 10012, US"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-envelope me-3",children:" "}),"info@example.com"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-phone me-3",children:" "})," + 01 234 567 88"]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fas fa-print me-3",children:" "})," + 01 234 567 89"]})]})]})})}),Object(x.jsxs)("div",{className:"text-center p-4",children:["\xa9 2021 Copyright:",Object(x.jsx)("a",{className:"text-reset fw-bold",children:"MDBootstrap.com"})]})]})})},V=c(47),J="http://127.0.0.1:8000",G=function(){function e(){Object(S.a)(this,e)}return Object(T.a)(e,[{key:"getCustomers",value:function(){var e="".concat(J,"/api/customers/");return d.a.get(e).then((function(e){return e.data}))}},{key:"getCustomersByURL",value:function(e){var t="".concat(J).concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"getCustomer",value:function(e){var t="".concat(J,"/api/customers/").concat(e);return d.a.get(t).then((function(e){return e.data}))}},{key:"deleteCustomer",value:function(e){var t="".concat(J,"/api/customers/").concat(e.pk);return d.a.delete(t)}},{key:"createCustomer",value:function(e){var t="".concat(J,"/api/customers/");return d.a.post(t,e)}},{key:"updateCustomer",value:function(e){var t="".concat(J,"/api/customers/").concat(e.pk);return d.a.put(t,e)}}]),e}(),M=new G,W=function(e){Object(F.a)(c,e);var t=Object(P.a)(c);function c(e){var a;return Object(S.a)(this,c),(a=t.call(this,e)).state={customers:[],nextPageURL:""},a.nextPage=a.nextPage.bind(Object(V.a)(a)),a.handleDelete=a.handleDelete.bind(Object(V.a)(a)),a}return Object(T.a)(c,[{key:"componentDidMount",value:function(){var e=this;M.getCustomers().then((function(t){console.log(t),e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"handleDelete",value:function(e,t){var c=this;M.deleteCustomer({pk:t}).then((function(){var e=c.state.customers.filter((function(e){return e.pk!==t}));c.setState({customers:e})}))}},{key:"nextPage",value:function(){var e=this;console.log(this.state.nextPageURL),M.getCustomersByURL(this.state.nextPageURL).then((function(t){e.setState({customers:t.data,nextPageURL:t.nextlink})}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"customers--list",children:[Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"username"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Actions"})]})},"thead"),Object(x.jsx)("tbody",{children:this.state.customers.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[t.pk,"  "]}),Object(x.jsx)("td",{children:t.username}),Object(x.jsx)("td",{children:t.email}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{onClick:function(c){return e.handleDelete(c,t.pk)},children:" Delete"}),Object(x.jsx)(i.b,{className:"btn btn-primary",to:{pathname:"/customer/".concat(t.pk,"/")},children:"user 1"})," / Update"]})]},t.pk)}))})]}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:this.nextPage,children:"Next"})]})}}]),c}(a.Component),Y=new G,K=function(e){Object(F.a)(c,e);var t=Object(P.a)(c);function c(e){var a;return Object(S.a)(this,c),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(V.a)(a)),a}return Object(T.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;t&&t.pk&&Y.getCustomer(t.pk).then((function(t){e.refs.username.value=t.username,e.refs.email.value=t.email}))}},{key:"handleCreate",value:function(){Y.createCustomer({username:this.refs.username.value,email:this.refs.email.value}).then((function(e){alert("Customer created!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleUpdate",value:function(e){Y.updateCustomer({pk:e,username:this.refs.username.value,email:this.refs.email.value}).then((function(e){console.log(e),alert("Customer updated!")})).catch((function(){alert("There was an error! Please re-check your form.")}))}},{key:"handleSubmit",value:function(e){var t=this.props.match.params;t&&t.pk?this.handleUpdate(t.pk):this.handleCreate(),e.preventDefault()}},{key:"render",value:function(){return Object(x.jsx)("form",{onSubmit:this.handleSubmit,children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username:"}),Object(x.jsx)("input",{className:"form-control",type:"text",ref:"firstName"}),Object(x.jsx)("label",{children:"Email:"}),Object(x.jsx)("input",{className:"form-control",type:"text",ref:"email"}),Object(x.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Submit"})]})})}}]),c}(a.Component);var Q=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(o.a)(c,2),s=n[0],r=n[1],i=t.params.id;return Object(a.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/pages/".concat(i,"/")}).then((function(e){r(e.data)}))}),[i]),Object(x.jsx)("div",{className:"App m-5",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:s.title}),Object(x.jsx)("p",{className:"card-text",children:s.content})]})})})},X=Object(y.f)((function(e){var t=p.a().shape({password:p.b().required("Password is required")});return Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(x.jsx)("h2",{children:"Login Page"}),Object(x.jsx)(u.c,{initialValues:{username:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/token/login/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){window.localStorage.setItem("tokens",t.auth_token),e.history.push("/")})).catch((function(e){console.log(e)}))},validationSchema:t,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)(u.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(u.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Login"})]})}})]})})})})),Z=Object(y.f)((function(e){var t=p.a().shape({password:p.b().required("Password is required"),email:p.b().required("Email is required")});return Object(x.jsx)(n.a.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"login-wrapper",style:{margin:"32px auto 37px",maxWidth:"530px",background:"#fff",padding:"30px",borderRadius:"10px",boxShadow:"0px 0px 10px 10px rgba(0,0,0,0.15)"},children:[Object(x.jsx)("h2",{children:"Register Page"}),Object(x.jsx)(u.c,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){fetch("http://127.0.0.1:8000/auth/users/",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(t){console.log(t),e.history.push("/auth/token/login/")})).catch((function(e){console.log(e)}))},validationSchema:t,enableReinitialize:!0,children:function(e){return Object(x.jsxs)(u.b,{className:"form-container",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)(u.a,{type:"text",name:"username",id:"username",className:"form-control ",placeholder:"username"}),e.touched.username&&e.errors.username&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.username})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)(u.a,{type:"text",name:"email",id:"email",className:"form-control",placeholder:"Email"}),e.touched.email&&e.errors.email&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.email})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)(u.a,{type:"password",name:"password",id:"password",className:"form-control ",placeholder:"Password"}),e.touched.password&&e.errors.password&&Object(x.jsx)("span",{className:"help-block text-danger",children:e.errors.password})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Register"})]})}})]})})})}));var $=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=localStorage.tokens;return Object(a.useEffect)((function(){d()({method:"GET",headers:{Authorization:"Token ".concat(s),Accept:"application/json","Content-Type":"application/json"},url:"http://127.0.0.1:8000/api/account/"}).then((function(e){console.log(e.data),n(e.data)}))}),[]),Object(x.jsx)("div",{className:"container mt-5",children:Object(x.jsx)("div",{className:"page-content page-container ml-4 ",id:"page-content",children:Object(x.jsx)("div",{className:"padding mb-5",children:Object(x.jsx)("div",{className:"row container d-flex justify-content-center mb-5",children:Object(x.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(x.jsx)("div",{className:"card user-card-full",children:Object(x.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(x.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(x.jsxs)("div",{className:"card-block text-center text-white",children:[Object(x.jsx)("div",{className:"m-b-5",children:Object(x.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/user.png",className:"img-radius",alt:"User-Profile-Image"})}),Object(x.jsx)("h6",{className:"f-w-600",children:" "}),Object(x.jsx)("p",{children:"Web "})," ",Object(x.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16",children:" "})]})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsxs)("div",{className:"card-block",children:[Object(x.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600 mb-5",children:"Information"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-sm-6",children:[Object(x.jsx)("p",{className:"m-b-10 f-w-600",children:"Username"}),Object(x.jsxs)("h6",{className:"text-muted f-w-400",children:[c.username," "]})]}),Object(x.jsxs)("div",{className:"col-sm-6",children:[Object(x.jsx)("p",{className:"m-b-10 f-w-600",children:"Email"}),Object(x.jsxs)("h6",{className:"text-muted f-w-400",children:[c.email," "]})]})]})]})})]})})})})})},c.id)})};var ee=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(q,{}),Object(x.jsxs)(y.c,{children:[Object(x.jsx)(y.a,{path:"/auth/token/login/",component:X}),Object(x.jsx)(y.a,{path:"/auth/users/",component:Z}),Object(x.jsx)(y.a,{path:"/pages/:id/",component:Q}),Object(x.jsx)(y.a,{path:"/account/",component:$}),Object(x.jsx)(y.a,{path:"/customer-list/",exact:!0,component:W}),Object(x.jsx)(y.a,{path:"/customer/:pk/",component:K}),Object(x.jsx)(y.a,{path:"/customer/",exact:!0,component:K}),Object(x.jsx)(y.a,{path:"/board/:id/topic/:pk/",exect:!0,component:H}),Object(x.jsx)(y.a,{path:"/board/:id/",exect:!0,component:B}),Object(x.jsx)(y.a,{path:"/board/:id/new/",component:A}),Object(x.jsx)(y.a,{path:"",exect:!0,component:N})]}),Object(x.jsx)(_,{})]})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,294)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),te()}},[[287,1,2]]]);
//# sourceMappingURL=main.d18b7648.chunk.js.map