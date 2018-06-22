import * as React from 'react'
import {connect} from 'react-redux'
import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/users'
import notificationImg from '../../images/pegBoardNotifications.png'
import { logOut } from '../../actions/users'
import {Link, Redirect} from 'react-router-dom'

const r = {
  requesterId:3,
  posterId: 1,
  postBody: {
    postId:6,
    description: 'looking for somebody',
    category: 'cooking'
  }
}

class NotificationsContainer extends React.PureComponent {
  state = {switched: false}



  acceptRequest = (req)=> {
    this.props.makeMatch(req)

  }

  logSwitch = () => {
    setTimeout(()=> { this.setState({
    switched: true
  })
this.props.logOut()}, 600);


  }

  render() {


    return <div className="container">
    <div className="header">
    <ul className="breadcrumb">
      <li><Link to={'/'}>Home</Link></li>
      <li>Reactions</li>
    </ul>
    <div className="logContainer">
      <span className= "log">LOG OUT</span>
      <div onClick ={this.logSwitch} className="logOut"><label className={"switch"}><input type={"checkbox"}/><span className={"slider round"}></span></label></div>
      {this.state.switched &&  <Redirect to='/'></Redirect>}

    </div>
    </div>

      <img className ="headerImg" src={notificationImg}/>
      <Notifications users = { this.props.users } logUserId = { this.props.logUserId} accept={this.acceptRequest}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    logUserId: state.logUser
  }
}

export default connect(mapStateToProps, {makeRequest, makeMatch, logOut})(NotificationsContainer)
