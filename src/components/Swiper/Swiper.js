import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class Swiper extends Component{

	state = {
		index: 0,
		flag: false
	}

	increment = (holder) => {

		if (this.state.index < holder.length - 1) {
			this.setState({
				index: this.state.index + 1
			})
			this.props.makeRequest({requesterId: this.props.user.logUser, ...holder[this.state.index]})
		} else {
			this.setState({
				flag: true
			})
		}
	}

	decline = () => {
		this.setState({
			index: this.state.index + 1
		})
	}

	render() {
		const category = this.props.matchParams.category

		let type = this.props.matchParams.type

		if(this.props.matchParams.type === 'freelancer'){
			type = 'employer'
		} else if (this.props.matchParams.type === 'employer'){
			type = 'freelancer'
		}

		if (this.state.flag) {
			return <Redirect to={'/home'}></Redirect>
		}

		console.log(this.type)

		const holder = this.props.user.posts[category][type]
		.filter((x) => x.posterId !== this.props.user.logUser)

		return (
			<div className="user">


				<div>

					{

						<div className="fl w-60 ba"  >
							<h1 key={holder[this.state.index].posterId}>{holder[this.state.index].postBody.description}</h1>
				 			<button className="dislike-button fl w-10 bg-washed-red br3 grow" onClick={this.decline}>Dislike</button>
				 			<button className="like-button fl w-10 bg-washed-green br3 grow" onClick={() => this.increment(holder)}>Like</button>
						</div>

					}

				</div>
			</div>
		)
	}
}

export default Swiper;
