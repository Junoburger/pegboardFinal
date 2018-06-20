import * as React from 'react'


export default function Notifications(props) {
  const requestsNotifications = props.users[props.logUserId].notification.request
  const matchNotifications = props.users[props.logUserId].notification.match
  return (<div className='notificationContainer'>
      <ul className='requests' >{requestsNotifications
        .map(req => {
          return <li className='requestItem' key = {props.users[req.requesterId].userId}> <div className='sender'>User: {props.users[req.requesterId].name}</div> <div className='description'>Post:{req.postBody.description}</div> <button onClick ={()=>{props.accept(req)}} href={'/'} className='accept'>Accept</button></li> })}</ul>

      <ul className='matchs' >{matchNotifications
        .map(req => {
          return <li className='matchItem' key = {props.users[req.requesterId].userId}> User: {props.users[req.requesterId].name} </li> })}</ul>

    </div>)

    }

    // return <li className='requestItem' key = {props.users[req.requesterId].userId}> User: {props.users[req.requesterId].name}<button onClick={props.accept}>accept</button> </li> })}</ul>
