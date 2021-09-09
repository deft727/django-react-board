import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from "yup";
import {withRouter} from "react-router-dom";


function NewPost(props) {
    const{openPost,handleClosePost,history,match} = props;
    const id = match.params.id
    const pk = match.params.pk
    const tokens = localStorage.tokens;

    const  validationSchema = Yup.object().shape({
    message: Yup.string().required('message is wrong'),
  }, [id,pk])


  const handleSubmit = (values) => {

    const REST_API_URL = `http://127.0.0.1:8000/api/board/${id}/topic/${pk}/`;
    fetch(REST_API_URL, {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
            'Authorization': `Token ${tokens}`,
            'Content-Type': 'application/json',
                }
    }).then(response=> {
      if (response.status===201) {
          // props.history.push('/')
            handleClosePost()
      }
      else {
        // HANDLE ERROR
          handleClosePost()
          window.location.reload();
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA

    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
  return (
    <div>
      <Modal show={openPost} onHide={handleClosePost}>

        <Modal.Header closeButton>
          <Modal.Title> New Post </Modal.Title>
        </Modal.Header>

        <Modal.Body>
<React.Fragment>

          <Formik
       initialValues={{ message: "" }}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}
     >
       {props => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="name">message</label>
              <Field type="text" name="message" id={"message"} className={"form-control "} placeholder="message" />
              { props.touched.message && props.errors.message && <span className="help-block text-danger">{props.errors.message}</span> }
            </div>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClosePost}>Close</Button>
                  <button type="submit" className="btn btn-primary mb-2">Create </button>

        </Modal.Footer>
          </Form>)}
             </Formik>

    </React.Fragment>

        </Modal.Body>


      </Modal>

    </div>
  );
}

export default withRouter(NewPost);