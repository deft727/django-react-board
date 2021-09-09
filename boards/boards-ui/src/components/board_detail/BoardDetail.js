import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";
import InfoModal from "../InfoModal/infomodal";
import NewTopic from "../NewTopic/newtopic";

function BoardDetail({ match }) {

    const [board, Setboard] = useState({})
    const [topics, SetTopic] = useState([])
    const id = match.params.id
    const tokens = localStorage.tokens;

    const [showTopic, setShowTopic] = useState(false);
    const handleCloseTopic = () => setShowTopic(false);
    const handleShowTopic =() =>{
      setShowTopic(true);}


// console.log(match)
    useEffect(() => {

        axios({
            method: "GET",
            headers: {
                'Authorization': `Token ${tokens}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                },
            url: `http://127.0.0.1:8000/api/board/${id}/`
        }).then(response => {
            Setboard(response.data)
            SetTopic(response.data.topics)
        })
    }, [id, showTopic])

    return(

<div className="App mt-5">
 {
                          !tokens ? null : ( <>
              <Button variant="success " className="d-flex m-1 ml-2" onClick={()=>handleShowTopic()} >New Topic</Button>
  {showTopic && <NewTopic openTopic={showTopic}  handleCloseTopic={handleCloseTopic} />}
  </>)
                        }
 {topics.length ?

     <table className="table table-bordered m-1">

        <thead>
        <tr>
      <th scope="col">Topic</th>
      <th scope="col">Starter</th>
      <th scope="col">Replies</th>
      <th scope="col">Views</th>
      <th scope="col">Last Update</th>
        </tr>
        </thead>
       {topics.map(t => (
        <tbody className="infinite-item" key={t.id}>
        <tr>
          <td>
              <small className="text-muted d-block">
 {
   !tokens ? null : (
<Link className="link-success" to={{pathname:`/board/${board.id}/topic/${t.id}/` }}>
    <p className="h5">{t.subject}</p>
    </Link>
   )}
              </small>
          </td>
          <td className="align-middle">
            {t.starter}
          </td>
          <td className="align-middle">
            {t.replies}
          </td>
          <td className="align-middle">
               {t.views}
              </td>
          <td className="align-middle">
           {t.last_updated}
          </td>
        </tr>
        </tbody>
           ))}
      </table>
     : <p className="text-center fs-3">Content doesnt exist, create new topic</p>
 }
</div>

    )
}

export default withRouter(BoardDetail);