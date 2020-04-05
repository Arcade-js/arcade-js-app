import React, { Component } from 'react';


class SignUp extends Component{
   render(){
      return(
         <div id="signup">
            <h1>SignUp</h1>
            <form>
              <label class="hidden" for="first_name">First Name</label>
              <input type="text" id="first_name" value="" placeholder="First Name" required />
              <label class="hidden" for="last_name">Last Name</label>
              <input type="text" id="last_name"  value="" placeholder="Last Name" required />
              <label class="hidden" for="email">E-mail Address</label>
              <input type="text" id="email" pattern="email" value="" placeholder="E-Mail Address" required />
              <label class="hidden" for="password1">Password</label>
              <input type="text" id="password1" value="" placeholder="Create a Password" required />
              <label class="hidden" for="password2">Re-Enter Password</label>
              <input type="text" id="password2" value="" placeholder="Re-Enter Password" required />
              <input type="submit" id="password" value="Create Account" />
            </form>
         </div>
      );
   }
}
export default SignUp;
