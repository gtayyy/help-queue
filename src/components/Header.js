import React from "react";
import ticketsImage from "./../img/tickets.jpg";
import { Link } from "react-router-dom";

function Header(){
  return(
    <React.Fragment>
			<h1>Help Queue</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/sign-in">Sign In</Link>
				</li>
				</ul>
      <img height="300px" src={ticketsImage} alt="A roll of tickets"/>
    </React.Fragment>
  );
}

export default Header;