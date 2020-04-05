import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Gameroom extends Component{
   render(){
      return(
         <div id="gameroom">
            <h1>Gameroom</h1>
            <div class="game-list">
              <Link to="/block-breaker">Block Breaker</Link>
              <Link to="/number-smash">Number Smash</Link>
            </div>
         </div>
      );
   }
}
export default Gameroom;
