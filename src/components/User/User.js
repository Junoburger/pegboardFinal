import * as React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {

  console.log(props)

  return (


    <div className="userMain">

      <Link to={'/home'}> Back </Link>

      <div className="displayUser">

        <h1>Param User: {props.matchParams.userid}</h1>
        <h1>Accepted: {props.matchParams.accepted}</h1>


        <h1>Array User: {props.properties.user.users}</h1>

      </div>

    </div>

  )

}
