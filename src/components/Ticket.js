import React from "react";

function Ticket(props){
  return (
    <React.Fragment>
      <h3>3a</h3>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Ticket;