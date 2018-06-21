import * as React from 'react'
import {connect} from 'react-redux'
import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/users'
import notificationImg from '../../images/pegBoardNotifications.png'
import { logOut } from '../../actions/users'
import {Link} from 'react-router-dom'

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


  componentDidMount(){


  }

  acceptRequest = (req)=> {
    console.log(req)
    this.props.makeMatch(req)

  }


  render() {

    // return <div>hola</div>
    return <div className="container">
    <div className="header">
      <span className= "log">LOG OUT</span>
      <Link to={'/'} onClick={this.props.logOut} className="postLink logout"><label className={"switch"}><input type={"checkbox"}/><span className={"slider round"}></span></label></Link>
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
