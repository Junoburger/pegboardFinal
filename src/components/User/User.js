import * as React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {

  // console.log(props)

  return (

    // <h1>Posts</h1>

    <div className="userMain">

      <Link to={'/home'}> Back </Link>

      <div className="userArea">

        <h1>Current User: {props.properties.logUser}</h1>

      </div>

    </div>

  )

}
