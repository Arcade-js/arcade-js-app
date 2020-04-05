import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

/* SCREENS */
import About from "./About";
import Gameroom from "./Gameroom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import LogIn from "./LogIn";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import UserProfile from "./UserProfile";

/* GAMES */
import BlockBreaker from "../games/BlockBreaker";
import NumberSmash from "../games/NumberSmash";

/* COMPONENTS */
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
                {/* SCREENS */}
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/gameroom' component={Gameroom} />
                <Route exact path='/leaderboard' component={Leaderboard} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/user-profile' component={UserProfile} />
                {/* GAMES */}
                <Route exact path='/block-breaker' component={BlockBreaker} />
                <Route exact path='/number-smash' component={NumberSmash} />
                {/* 404 PAGE */}
                <Route component={NotFound} />
              </Switch>
            </main>
            <footer>
              <Footer />
            </footer>
          </div >
        </HashRouter>
      );
   }
}
export default App;
