import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function InfoPageDetail({ match }) {

    const [infopage, Setinfopage] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/pages/${id}/`
        }).then(response => {
            Setinfopage(response.data)
        })
    }, [id])

     return(
<div className="App m-5">

    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{infopage.title}</h5>
            <p className="card-text">{infopage.content}</p>
        </div>
    </div>
</div>
    )
}

export default InfoPageDetail;