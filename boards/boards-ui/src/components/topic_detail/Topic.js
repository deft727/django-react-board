import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import {Button} from "react-bootstrap";
import NewTopic from "../NewTopic/newtopic";
import NewPost from "../NewPost/newpost";

function TopicDetail({ match }) {
    const tokens = localStorage.tokens;
    const [topic, SetTopic] = useState({})
    const [posts, SetPosts] = useState([])
    const [images, SetImage] = useState([])
    const id = match.params.id
    const pk = match.params.pk
    const [showPost, setShowPost] = useState(false);
    const handleClosePost = () => setShowPost(false);
    const handleShowPost =() =>{
      setShowPost(true);}


    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/board/${id}/topic/${pk}/`
        }).then(response => {
            SetTopic(response.data)
            SetPosts(response.data.posts)
            SetImage(response.data.photos)
        })
    }, [id,showPost])
    return(


<div className="App bordered mt-3 ">

    <div className="d-flex justify-content-center">
        <div className="row">
            <div className="col-sm">
 <Carousel>
   {images.map(i => (
  <Carousel.Item>
    <img

      className="d-block"
      src={i.file}
      alt="First slide"
    />
  </Carousel.Item>

       ))}
</Carousel>
</div>
  </div>

</div>
    <div className="container-fluid">

    <table className="table table-bordered m-2">

               <thead>  {showPost && <NewPost openPost={showPost}   handleClosePost={handleClosePost} />}
                             {
     !posts.length  ? <strong>No contents create new <Button variant="btn btn-link" onClick={()=>handleShowPost()}>post</Button>
     </strong> : ( <>
    <Button placement="right" variant="btn btn-primary mt-2"  onClick={()=>handleShowPost()} >New Post</Button>

               <tr >
                   <th scope="col">User</th>
                   <th scope="col" >Post</th>
                   <th scope="col">Time</th>
               </tr>  </>)
                        }
               </thead>
               {posts.map(p => (
               <tbody key="{p.id}">
               <tr>
                   <th >{p.created_by}</th>
                   <td >{p.message}</td>
                   <td>{p.created_at}</td>
               </tr>
               </tbody>
                   ))}

           </table>
</div>
</div>
    )
}
export default TopicDetail;