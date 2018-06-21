import * as React from 'react'
import { Link } from 'react-router-dom'

import './user.css'

export default function User(props) {

  console.log(props.user)

  return (

    <div className="userMain">

      <div className="homeLink">
        <Link to={'/home'} > Back </Link>
      </div>

      <div className="displayUser">

        <div className="userInfo">
          <h1>Name: { props.user[props.id].name }</h1>
          <h1>User ID: { props.user[props.id].userId }</h1>
        </div>

        {/* CHANGE THIS TO TRUE WHEN LINKED WITH NOTIFICATIONS PAGE */}
        <h1>{ props.isAccepted  && props.user[props.id].email }</h1>

      </div>

    </div>

  )

}
