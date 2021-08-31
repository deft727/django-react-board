import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link, withRouter} from "react-router-dom";

function BoardDetail({ match }) {

    const [board, Setboard] = useState({})
    const [topics, SetTopic] = useState([])
    const id = match.params.id
// console.log(match)
    useEffect(() => {

        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/board/${id}/`
        }).then(response => {
            Setboard(response.data)
            SetTopic(response.data.topics)
        })
    }, [id])

    return(
<div className="App mt-5">

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

<Link className="link-success" to={{pathname:`/board/${board.id}/topic/${t.id}/` }}>{t.subject}</Link>

              </small>
          </td>
          <td className="align-middle">
            {t.starter}
          </td>
          <td className="align-middle">
            123
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
</div>
    )
}

export default withRouter(BoardDetail);