import React, { Component } from 'react';


class Leaderboard extends Component{
   render(){
      return(
         <div id="leaderboard">
            <h1>Leaderboard</h1>
            <div class="leaderboards">
              <div class="leaderboards__scorecard">
                <h5>Block Breaker High Scores:</h5>
              </div>
              <div class="leaderboards__scorecard">
                <h5>Number Smash High Scores:</h5>
              </div>
            </div>
         </div>
      );
   }
}
export default Leaderboard;
