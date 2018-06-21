import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import logo from './images/pegboard.png'

import PostContainer from './components/Posts/PostContainer'
import SwiperContainer from './components/Swiper/SwiperContainer'

import NotificationsContainer from './components/Notifications/NotificationsContainer'

class App extends Component {
  render() {
    return (<div className="App">
      <img src={logo} alt="PegBoardLogo" className="Logo"/>
      <Route exact path="/" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route exact path="/home" component={PostContainer} />
      <Route exact path="/matcher/:category/:type" component={SwiperContainer} />
      <Route exact path="/Notifications" component={NotificationsContainer} />

      </div>

    );
  }
}

export default App;
