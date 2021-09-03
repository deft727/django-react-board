import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie'
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
function deleteboard(val) {

}
function Table(props) {

    const tokens = localStorage.tokens;

    const [boards, SetBoards] = useState([])
     useEffect(() => {
            // let tokens = window.localStorage.getItem('tokens');
            console.log('tokens', Cookies.get('csrftoken') )

            axios({
                method: "GET",
                headers: {
                    'Authorization': `Token ${tokens}`,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json',
                    'csrftoken': Cookies.get('csrftoken'),
                },
                url: `http://127.0.0.1:8000/api/board/`
            }).then(response => {
                SetBoards(response.data.results)
            })
        }, []);

    const deleteboard = (pk) => {
        axios({
            method: "delete",
            headers: {
                'Authorization': `Token ${tokens}`,
                'Accept': 'application/json',
            },
            url: `http://127.0.0.1:8000/api/board/${pk}/`
        }).then((response)=> {
            // console.log(response)
            if (response.status === 204) {
             window.location.reload();
                // props.history.push("/")
            }
    } )}

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
      <Button variant="primary" onClick={}>
        Launch Form modal
      </Button>
       <Link  type="button" onClick={() => deleteboard(`${b.id}`)}  className="btn btn-danger">Delete</Link>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        );

}


export default Table;
