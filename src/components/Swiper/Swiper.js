import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './swiper.css'



class Swiper extends Component{

	render() {
		const category = this.props.matchParams.category

		let type = this.props.matchParams.type

		if(this.props.matchParams.type === 'freelancer'){
			type = 'employer'
		} else if (this.props.matchParams.type === 'employer'){
			type = 'freelancer'
		}

		console.log(this.type)

		return (
			<div className="main mw5 mw7-ns center bg-light-gray pa3 ph5-ns">


				<div>

					{console.log('THIS',this)}

					{
						this.props.user.posts[category][type]
						.filter((x) => x.posterId !== this.props.user.logUser)
						.map((x) => {
							return (
								<div className="container"  >
									<h1 key={x.posterId}>{x.postBody.description}</h1>
									<button className="dislike-button fl w-20 bg-washed-red br3 grow" onClick={this.props.dislikeAction}>Dislike</button>
									<button className="like-button fl w-20 bg-washed-green br3 grow" onClick={()=>{this.props.makeRequest({requesterId: this.props.user.logUser, ...x})}}>Like</button>
								</div>
							)
						})
					}

				</div>
			</div>
		)
	}
}

export default Swiper;
