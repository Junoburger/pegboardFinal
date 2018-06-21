import * as React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {



  // const user = props

  console.log(props)

  return (

    // <h1>Posts</h1>

    <div className="userMain">

      <Link to={'/home'}> Back </Link>

      <div className="userArea">

        <h1>Current User Logged In: {props.properties.user.logUser}</h1>

      </div>

      <div className="displayUser">

        {/* <h1>User: {props.matchParams}</h1> */}

      </div>

    </div>

  )

}
