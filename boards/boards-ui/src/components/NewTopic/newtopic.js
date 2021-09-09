import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from "yup";
import {withRouter} from "react-router-dom";
import FormData from 'form-data';
const axios = require('axios');

function NewTopic(props) {
    const{openTopic,handleCloseTopic,history,match} = props;
    const id = match.params.id
    const tokens = localStorage.tokens;
    const  validationSchema = Yup.object().shape({
    subject: Yup.string().required('subject is wrong'),
  }, [id])


  const handleSubmit = (values) => {
    let data = new FormData();
    for(const file of values.file){
        data.append("image", file);
    }
     // data.append('file[]', values.file, values.file.name,);
     data.append('subject', values.subject);
    // console.log("data", data)
    console.log("values", values.file.name)
    const REST_API_URL = `http://127.0.0.1:8000/api/board/${id}/new/`;
    axios.post(REST_API_URL, data, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data`,
    'Authorization': `Token ${tokens}`,

  }
})
  .then((response) => {
      if (response.status===201) {
          alert("Success");
            handleCloseTopic()
      }
      else {
          alert("error");
          handleCloseTopic()
          // window.location.reload();
        throw new Error('Something went wrong');
      }
  });
  }
  return (
    <div>
      <Modal show={openTopic} onHide={handleCloseTopic}>

        <Modal.Header closeButton>
          <Modal.Title> New Topic </Modal.Title>
        </Modal.Header>

        <Modal.Body>
<React.Fragment>

          <Formik
       initialValues={{ subject: "" }}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}
     >
       {props => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="name">subject</label>
              <Field type="text" name="subject" id={"subject"} className={"form-control "} placeholder="subject" />
              { props.touched.subject && props.errors.subject && <span className="help-block text-danger">{props.errors.subject}</span> }

               <input className="m-2"
              multiple={true}
              type="file"
              name="file"
              onChange={(event) =>{
                props.setFieldValue("file", event.target.files);
              }}
            />

            </div>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseTopic}>Close</Button>
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

export default withRouter(NewTopic);