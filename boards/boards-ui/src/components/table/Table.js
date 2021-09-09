import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie'
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import MyModal from "../Modal/modal";
import BoardForm from "../BoardForm/boardform";
import InfoModal from "../InfoModal/infomodal";



function deleteboard(val) {
}
function Table(props) {
  const [currentBoard, setCurrentBoard]  = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =(bordId) =>{
      console.log(bordId);
      setShow(true);
      setCurrentBoard(bordId);
  }
const tokens = localStorage.tokens;


  const [showBoard, setShowBoard] = useState(false);
  const handleCloseBoard = () => setShowBoard(false);
  const handleShowBoard =() =>{
      setShowBoard(true);
  }

  const [showInfo, setShowInfo] = useState(false);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo =() =>{
      setShowInfo(true);
  }

const [myhistory, setHistory] = useState([])
const [boards, SetBoards] = useState([])
     useEffect(() => {
            // let tokens = window.localStorage.getItem('tokens');
            // console.log('tokens', Cookies.get('csrftoken') )
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
                SetBoards(response.data.results);
                setHistory(response.data.history)
            })
        }, []);

            // console.log(history)

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
             //    props.history.push("/")
            alert("Success");

            }
            else {
                            alert("Error");

            }
    } )}

        return (
            <div className="App mt-5">
           {
             !tokens ? null : ( <>
<div className="d-flex p-2">
  <Button variant="success" onClick={()=>handleShowBoard()}>New Board</Button> &nbsp;

  <Button variant="secondary" onClick={()=>handleShowInfo(myhistory)}> Last info </Button>

  {showBoard && <BoardForm open={showBoard}  handleCloseBoard={handleCloseBoard}/>}
  {showInfo && <InfoModal openInfo={showInfo}  handleCloseInfo={handleCloseInfo} myhistory={myhistory}/>}

  </div>
             </>)
                 }
                <table className="table table-bordered m-1">
                    <thead>
                    <tr>
                        <th scope="col">Board</th>
                        <th scope="col">Topics</th>
                        <th scope="col">Posts</th>
                        <th scope="col">Last Post</th>
                        { !tokens ? null : (
                        <th scope="col">Edit</th>   )}
                    </tr>
                    </thead>
                    {boards.map(b => (
                        <tbody key={b.id}>
                        <tr>
                            <td>
                                <small className="text-muted d-block">
                          <Link className="link-success" to={{pathname:`/board/${b.id}/`, froDashboard:false }}>
                              <p className="h5">{b.name}</p></Link>
                            <p>{b.description}</p>
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
    { !tokens ? null : (
                            <td>
      <Button variant="primary" onClick={()=>handleShow(b)} >
        Edit
      </Button> &nbsp; &nbsp;
       <Link  type="button" onClick={() => deleteboard(`${b.id}`)}  className="btn btn-danger">Delete</Link>
                            </td>     )}

                        </tr>
                        </tbody>
                    ))}
                </table>
                {show && <MyModal open={show} boarD={currentBoard} handleClose={handleClose}/>}
            </div>
        );
}


export default Table;
