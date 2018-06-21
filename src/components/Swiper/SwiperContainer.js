import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../actions/users'
import Swiper from './Swiper'



class SwiperContainer extends React.PureComponent {ya

  componentWillMount() {

	}

	renderUser() {
		return (
			<div>
        <Link to={'/home'}> Back to main page </Link>
        <Swiper user={this.props.user} matchParams={this.props.match.params} makeRequest={this.props.makeRequest}/>
      </div>
		);
	}

	render() {
		if(!this.props.user){
			return <h2> Loading... </h2>
		}
    else{
			return this.renderUser();
		}
	}

}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, { makeRequest })(SwiperContainer)
