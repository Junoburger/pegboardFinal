import React, {Component} from 'react';
import {connect} from 'react-redux';
import './swiper.css'
import {Link, Redirect} from 'react-router-dom';
import Slide from './Slide'
import SwipeableViews from 'react-swipeable-views';

class Swiper extends Component {

  state = {
    index: 0,
    flag: false,
    holder: []

  }

  componentDidMount() {
    const category = this.props.matchParams.category

    let type = this.props.matchParams.type

    if (this.props.matchParams.type === 'freelancer') {
      type = 'employer'
    } else if (this.props.matchParams.type === 'employer') {
      type = 'freelancer'
    }

    this.setState({holder: this.props.user.posts[category][type].filter((x) => x.posterId !== this.props.user.logUser)
    })

  }

  increment = (index) => {
    this.setState({index: index})
  }

  decline = () => {
    console.log(this.state.holder)
    let arr = [...this.state.holder]
    const arr2 = ['a', 's', 'f']
    console.log(arr2)
    console.log(arr2.splice(1, 1))

  }

  makerequets = (holder) => {
    console.log(this.state.index)
    this.props.makeRequest({
      requesterId: this.props.user.logUser,
      ...holder[this.state.index]
    })
  }

  render() {

    if (this.state.flag) {
      return <Redirect to={'/home'}></Redirect>
    }

    return (<div className="container">

       {
        <div className="card">

            <Slide users={this.props.users} data={this.state.holder} increment={this.increment}/>
          </div>

      }
      <div className="buttons">
        <button className="dislike-button">
          ✗
        </button>
        <button className="like-button" onClick={() => this.makerequets(this.state.holder)}>
          ✔
        </button>
      </div>

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Swiper)
