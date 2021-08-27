import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function TopicDetail({ match }) {

    const [topic, SetTopic] = useState({})
    const [posts, SetPosts] = useState([])
    const id = match.params.id
    const pk = match.params.pk
    console.log("match", match)
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/board/${id}/topic/${pk}/`
        }).then(response => {
            SetTopic(response.data)
            SetPosts(response.data.posts)
        })
    }, [id])
    return(

<div className="App bordered mt-4 m-3">
       {posts.map(p => (
           <table className="table table-bordered m-2">
               <thead>
               <tr>
                   <th scope="col">User</th>
                   <th scope="col">Post</th>
                   <th scope="col">Time</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                   <th >{p.created_by}</th>
                   <td>{p.message}</td>
                   <td>{p.created_at}</td>
               </tr>
               </tbody>
           </table>

       ))}
</div>
    )
}
export default TopicDetail;



        // <div className="card border-success mb-3" key="{p.id}">
        //     <div className="card-header bg-transparent border-success">{topic.subject}</div>
        //     <div className="card-body text-success">
        //         <h5 className="card-title">{p.created_by}</h5>
        //         <p className="card-text">{p.message}.</p>
        //     </div>
        //     </div>

 // <div key="{p.id}" className="card m-4">
 //               <div className="card-header text-white bg-dark py-2 px-3 ">{topic.subject}</div>
 //               <div className="card-body p-3 mt-3">
 //                   <div className="row">
 //                       <div className="col-2">
 //                           <strong className="text-muted">{p.created_by}</strong>
 //                            <small>Posts: {p.postCount}</small>
 //                       </div>
 //                       <div className="col-10">
 //                           <div className="row mb-3">
 //                               <div className="col-6 text-right">
 //                                   <small className="text-muted">{p.created_at}</small>
 //                               </div>
 //                           </div>
 //                           {p.message}
 //                       </div>
 //                   </div>
 //               </div>
 //           </div>