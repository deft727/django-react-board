import {Button, Modal} from "react-bootstrap";
import React from "react";
import BoardForm from "../BoardForm/boardform";

let crud = {
    "-": "Delete",
    "+": "Create",
    "~": "Update"
}

function InfoModal({openInfo,handleCloseInfo,myhistory,props}) {
const tokens = localStorage.tokens;

// console.log(myhistory)

  return (
    <div>
      <Modal show={openInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title> Last changes </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Object</th>
                    <th scope="col">Changes</th>
                    <th scope="col">Time</th>
                </tr>
                </thead>

                {
                    myhistory.map(h => (
                <tbody key={h.id}>
                <tr>
                    <td> {h.name}</td>
                    <td> {crud[h.history_type]}</td>
                    <td> {h.history_date}</td>
                </tr>
                </tbody>
                      ))}
            </table>
<React.Fragment>


        <Modal.Footer>

          <Button variant="secondary" onClick={handleCloseInfo}>Close</Button>


        </Modal.Footer>


    </React.Fragment>
        </Modal.Body>



      </Modal>

    </div>
  );
}

export default InfoModal;