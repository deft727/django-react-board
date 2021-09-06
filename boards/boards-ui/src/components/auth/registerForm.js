import React from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import {withRouter} from "react-router-dom";
import * as Yup from 'yup';

const RegisterPage = (props) => {
  const registerPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
  };

  const  validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required')
  })


  const handleSubmit = (values) => {
    const REST_API_URL = "http://127.0.0.1:8000/auth/users/";
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
      console.log(data);
      props.history.push("/auth/token/login/")
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
  // const { touched, errors } = props;
  return(
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={registerPageStyle}>
          <h2>Register Page</h2>
          <Formik
       initialValues={{ username: "",email: "", password: "" }}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}
       enableReinitialize
     >
       {props => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" id={"username"} className={"form-control "} placeholder="username" />
              { props.touched.username && props.errors.username && <span className="help-block text-danger">{props.errors.username}</span> }
            </div>
              <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" id={"email"} className={"form-control"} placeholder="Email" />
              { props.touched.email && props.errors.email && <span className="help-block text-danger">{props.errors.email}</span> }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id={"password"} className={"form-control "} placeholder="Password" />
              { props.touched.password && props.errors.password && <span className="help-block text-danger">{props.errors.password}</span> }
            </div>
            <button type="submit" className="btn btn-primary mb-2">Register</button>
          </Form>)}
             </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}


export default withRouter(RegisterPage);