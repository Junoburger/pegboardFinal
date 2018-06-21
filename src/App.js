import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

import PostContainer from './components/Posts/PostContainer'
import SwiperContainer from './components/Swiper/SwiperContainer'
import UserContainer from './components/User/UserContainer'

import NotificationsContainer from './components/Notifications/NotificationsContainer'

class App extends Component {
  render() {

    return (
      <div className="App-container">
        <div className="App">

      <div className="Login">
        <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/>
      </div>
      <Route exact path="/home" component={PostContainer}/>
      <Route exact path="/matcher/:category/:type" component={SwiperContainer}/>
      <Route exact path="/Notifications" component={NotificationsContainer}/>
      <Route exact path="/User/:userid/:accepted" component={UserContainer}/>

    </div></div>);
  }
}

export default App;
