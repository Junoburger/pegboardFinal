import * as React from 'react'
import { connect } from 'react-redux'

import User from './User'

class PostContainer extends React.PureComponent {

  componentDidMount() {

  }

  render() {
    return (
      <div>

        <User
          key={this.props.userId}
          name={this.props.name}
          bio={this.props.bio}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {  })(PostContainer)
