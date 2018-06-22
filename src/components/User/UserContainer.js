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

        <User properties={this.props} isAccepted={false}/>

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
