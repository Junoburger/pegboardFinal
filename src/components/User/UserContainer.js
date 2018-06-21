import * as React from 'react'
import { connect } from 'react-redux'

import User from './User'

class UserContainer extends React.PureComponent {

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div>

        <User user={this.props.user} id={this.props.match.params.userid} isAccepted={this.props.match.params.accepted}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, {  })(UserContainer)
