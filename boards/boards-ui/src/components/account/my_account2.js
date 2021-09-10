import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import CropModal from './modalcrop'


import axios from 'axios';
import {Button} from "react-bootstrap";
import NewTopic from "../NewTopic/newtopic";
import Dialog from "./Dialog";


function Profile2() {
    const [user, Setuser] = useState({})
    const tokens = localStorage.tokens;
    const [showTopic, setShowTopic] = useState(false);
    const handleCloseTopic = () => setShowTopic(false);
    const[image, setImage] = useState({})

    const handleShowTopic =() =>{
      setShowTopic(true);}
    useEffect(() => {

        axios({
            method: "GET",
            headers: {
                'Authorization': `Token ${tokens}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                },
            url: `http://127.0.0.1:8000/api/account/`
        }).then(response => {
            // console.log(response.data)
            Setuser(response.data)
            setImage(response.data.image)
        })
    }, [])


  return (
<div className="container mt-5">
      <div className="page-content page-container ml-4 " id="page-content" key={user.id}>
          <div className="padding mb-5">
              <div className="row container d-flex justify-content-center mb-5">
                  <div className="col-xl-6 col-md-12">
                      <div className="card user-card-full">
                          <div className="row m-l-0 m-r-0">
                              <div className="col-sm-4 bg-c-lite-green user-profile">
                                  <div className="card-block text-center text-white">
                                      <div className="m-b-5">
                                          <img
                                          src={image.image}
                                          className="img-radius" alt="User-Profile-Image" />
                                                <Dialog />

 {/*{*/}
 {/*                         !tokens ? null : ( <>*/}
 {/*             <Button variant="btn btn-link" className="d-flex m-1 ml-2" onClick={()=>handleShowTopic()} >New Topic</Button>*/}
 {/* {showTopic && <CropModal openTopic={showTopic}  handleCloseTopic={handleCloseTopic} />}*/}
 {/* </>)*/}
                        }
                                      </div>

                                      <h6 className="f-w-600"> </h6>
                                      <p>Web </p> <i
                                      className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"> </i>
                                  </div>
                              </div>
                              <div className="col-sm-8">
                                  <div className="card-block">
                                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600 mb-5">

                                      </h6>
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Username</p>
                                              <h6 className="text-muted f-w-400">{user.username} </h6>
                                          </div>
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Email</p>
                                              <h6 className="text-muted f-w-400">{user.email} </h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

  )
}

export default Profile2;








// axios.post(`http://127.0.0.1:8000/api/account/`, formData, {
//   headers: {
//     'accept': 'application/json',
//     'Accept-Language': 'en-US,en;q=0.8',
//     'Content-Type': `multipart/form-data`,
//     'Authorization': `Token ${tokens}`,
//
//   }})