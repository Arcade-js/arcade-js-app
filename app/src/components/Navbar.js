import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component{
   render(){
      return(
         <div id="navbar">
            <div class="navbar__logo-container">
              <Link to="/">LOGO</Link>
            </div>
            <div class="navbar__links-container">
              <Link to="/about">About</Link>
              <Link to="/gameroom">Gameroom</Link>
              <Link to="/leaderboard">Leaderboard</Link>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
         </div>
      );
   }
}
export default Navbar;
