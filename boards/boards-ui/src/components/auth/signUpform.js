import React from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import {withRouter} from "react-router-dom";
import * as Yup from 'yup';

const LoginPage = (props) => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
  };

  const  validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required')
  })

  const handleSubmit = (values) => {
    const REST_API_URL = "http://127.0.0.1:8000/auth/token/login/";
    fetch(REST_API_URL, {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
                'Content-Type': 'application/json',
                }
    }).then(response=> {
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      // console.log(data);
      window.localStorage.setItem('tokens', data.auth_token);
      props.history.push("/")
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
  // const { touched, errors } = props;
  return(
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <Formik
       initialValues={{ username: '', password: "" }}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}
     >
       {props => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" id={"username"} className={"form-control "} placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id={"password"} className={"form-control "} placeholder="Password" />
              { props.touched.password && props.errors.password && <span className="help-block text-danger">{props.errors.password}</span> }
            </div>
            <button type="submit" className="btn btn-primary m-2">Login</button>
          </Form>)}
             </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}



export default withRouter(LoginPage);