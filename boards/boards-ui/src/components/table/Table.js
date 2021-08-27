import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';


function Table() {
  const [boards, SetBoards] = useState([])
   useEffect(() => {

        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/board/`
        }).then(response => {
            SetBoards(response.data)
        })
    }, [])
  return (
    <div className="App mt-5">
        <table className="table table-bordered m-1">
            <thead>
            <tr>
                <th scope="col">Board</th>
                <th scope="col">Topics</th>
                <th scope="col">Posts</th>
                <th scope="col">Last Post</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            {boards.map(b => (
        <tbody key={b.id}>
        <tr>
          <td>
              <small className="text-muted d-block">
     <Link className="link-success" to={{pathname:`/board/${b.id}/`, froDashboard:false }}>{b.name}</Link>
              </small>
          </td>
          <td className="align-middle">
            {b.topics_count}
          </td>
          <td className="align-middle">
            {b.posts_count}
          </td>

          <td className="align-middle">

            <small>
                {b.last_post.message} <br/>
              <a href="">
                By {b.last_post.author}
              </a>
            </small>
          </td>


          <td>

          </td>

        </tr>

        </tbody>
           ))}
      </table>
    </div>
  );
}


export default Table;
