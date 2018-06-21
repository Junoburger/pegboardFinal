import * as React from 'react'
import { connect } from 'react-redux'

import User from './User'

class UserContainer extends React.PureComponent {

  componentDidMount() {
    // console.log(this)
  }

  render() {
    return (
      <div>

        <User properties={this.props.user}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, {  })(UserContainer)
