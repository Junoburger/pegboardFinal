import React, {Component} from 'react';
import {connect} from 'react-redux';
import './swiper.css'
import {Link, Redirect} from 'react-router-dom';
import Slide from './Slide'


class Swiper extends Component {

  state = {
    index: 0,
    flag: false
  }

  increment = (holder) => {

    if (this.state.index < holder.length - 1) {
      this.setState({
        index: this.state.index + 1
      })
      this.props.makeRequest({
        requesterId: this.props.user.logUser,
        ...holder[this.state.index]
      })
    } else {
      this.setState({flag: true})
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

    if (this.props.matchParams.type === 'freelancer') {
      type = 'employer'
    } else if (this.props.matchParams.type === 'employer') {
      type = 'freelancer'
    }

    if (this.state.flag) {
      return <Redirect to={'/home'}></Redirect>
    }



    const holder = this.props.user.posts[category][type].filter((x) => x.posterId !== this.props.user.logUser)
		console.log(holder)
    return (<div className="main mw5 mw7-ns center bg-light-gray pa3 ph5-ns measure-narrow">

      <div>

        {
          <div className="fl w-60 ba">
							<Slide users={this.props.users} data={holder} />
              {/* <h1 key={holder[this.state.index].posterId}>{holder[this.state.index].postBody.description}</h1> */}
              <button className="dislike-button fl w-30 bg-washed-red br3 grow" onClick={this.decline}>Dislike</button>
              <button className="like-button fl w-30 bg-washed-green br3 grow" onClick={() => this.increment(holder)}>Like</button>
            </div>
        }

      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    users:state.users

  }
}

export default connect(mapStateToProps)(Swiper)
