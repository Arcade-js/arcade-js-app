import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import UserProfile from "./UserProfile";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


class App extends Component{
   render(){
      return(
        <HashRouter>
          <div>
            <nav>
              <Navbar />
            </nav>
            <main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/profile' component={UserProfile} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </main>
          </div >
        </HashRouter>
      );
   }
}
export default App;
