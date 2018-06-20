import * as React from 'react'

export default function User(props) {

  return (

    // <h1>Posts</h1>

    <div className="userMain">

      <div className="userArea">

        <h1>{props.name}</h1>
        <h3>{props.bio}</h3>

      </div>

    </div>

  )

}
