import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Notifications(props) {
  const requestsNotifications = props.users[props.logUserId].notification.request
  const matchNotifications = props.users[props.logUserId].notification.match
  return (<div className='notificationContainer'>
      <p className='req' >REQUESTS</p>
      <ul className='requests' >{requestsNotifications
        .map(req => {
          return <li className='requestItem' key = {props.users[req.requesterId].userId}>
          <div className='userImg'></div>
            <div className='sender'><p><Link className='shortInfo' to={`/User/${req.requesterId}/${false}`}><b>{(props.users[req.requesterId].name).toUpperCase()}</b></Link> | GOT startup </p><p>12 Nov 2018</p></div>
              <div className='description'><b>Post:  </b>{req.postBody.description}</div>
                <button onClick ={()=>{props.accept(req)}} className='accept'>  > </button></li> })}</ul>
      <p className='mat' >MATCHS</p>
      <ul className='matchs' >{matchNotifications
        .map(req => {
          return <li className='requestItem' key = {props.users[req.requesterId].userId}>
          <div className='userImg'></div>
            <div className='sender'><p><b>{(props.users[req.requesterId].name).toUpperCase()}</b> | GOT startup </p><p>12 Nov 2018</p></div>
              <div className='description'><b>Post:  </b>{req.postBody.description}</div>
              <Link className='info' to={`/User/${req.requesterId}/${true}`}>Contact info</Link>
            </li> })}</ul>

    </div>)

    }
