import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from "yup";

function MyModal({open,handleClose,boarD,props}) {
    const tokens = localStorage.tokens;

  const  validationSchema = Yup.object().shape({
    name: Yup.string().required('name is wrong'),
    description: Yup.string().required('Description is wrong')
  })


  const handleSubmit = (values) => {
    const REST_API_URL = `http://127.0.0.1:8000/api/board/${boarD.id}/`;
    fetch(REST_API_URL, {
      method: 'put',
      body: JSON.stringify(values),
      headers: {
          'Authorization': `Token ${tokens}`,
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
      window.location.reload();

    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
  return (
    <div>
      <Modal show={open} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title> Edit '{boarD.name}'</Modal.Title>
        </Modal.Header>

        <Modal.Body>
<React.Fragment>

          <Formik
       initialValues={{ name: boarD.name, description: boarD.description }}
       onSubmit={handleSubmit}
       validationSchema={validationSchema}
       enableReinitialize
     >
       {props => (
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="name">name</label>
              <Field type="text" name="name" id={"name"} className={"form-control "} placeholder="Name" />
              { props.touched.name && props.errors.name && <span className="help-block text-danger">{props.errors.name}</span> }
            </div>
              <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" id={"description"} className={"form-control"} placeholder="Description" />
              { props.touched.description && props.errors.description && <span className="help-block text-danger">{props.errors.description}</span> }
            </div>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Close</Button>
                  <button type="submit" className="btn btn-primary mb-2">submit </button>

        </Modal.Footer>
          </Form>)}
             </Formik>

    </React.Fragment>

        </Modal.Body>



      </Modal>

    </div>
  );
}

export default MyModal;