import React, { Component } from 'react';
import { Link } from "react-router-dom";


class BlockBreaker extends Component{
   render(){
      return(
         <div id="blockbreaker" class="game">
            <h1>BlockBreaker</h1>
            <div class="game-container"></div>
            <Link to="/gameroom">Return to the Gameroom</Link>
         </div>
      );
   }
}
export default BlockBreaker;
