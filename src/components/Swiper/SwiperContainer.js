import * as React from 'react'
import { connect } from 'react-redux'

import { makeRequest } from '../../actions/users'

import Swiper from './Swiper'

class SwiperContainer extends React.PureComponent {ya

  componentWillMount() {
    // console.log('MATCH CRITERIA',this.props.match.params.category)
	}

	renderUser() {
		return (
			<div>
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
