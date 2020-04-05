import React, { Component } from 'react';
import getYear from '../assets/js/lib/get-year';


class Footer extends Component{
   render(){
      return(
         <div id="footer">
            <p>&copy; {`${getYear()}`} Arcade.js</p>
         </div>
      );
   }
}
export default Footer;
