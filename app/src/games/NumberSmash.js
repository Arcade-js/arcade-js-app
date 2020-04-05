import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NumberSmash extends Component{
   render(){
      return(
         <div id="numbersmash" class="game">
            <h1>NumberSmash</h1>
            <div class="game-container"></div>
            <Link to="/gameroom">Return to the Gameroom</Link>
         </div>
      );
   }
}
export default NumberSmash;
