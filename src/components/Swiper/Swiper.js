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
    holder:[]

  }

  componentDidMount(){
    const category = this.props.matchParams.category

    let type = this.props.matchParams.type

    if (this.props.matchParams.type === 'freelancer') {
      type = 'employer'
    } else if (this.props.matchParams.type === 'employer') {
      type = 'freelancer'
    }

    this.setState({
      holder: this.props.user.posts[category][type].filter((x) => x.posterId !== this.props.user.logUser)
    })

  }

  increment = (index) => {
      this.setState({
        index: index
      })
  }

  decline = () => {
    console.log(this.state.holder)
    let arr = [...this.state.holder]
    const arr2 = ['a','s','f']
    console.log(arr2)
    console.log(arr2.splice(1,1))


  }

makerequets = (holder)=> {
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


    return (<div className="main mw5 mw7-ns center bg-light-gray pa3 ph5-ns measure-narrow">

      <div>

        {
          <div className="fl w-60 ba">
              <Slide users={this.props.users} data={this.state.holder} increment={this.increment}/> {/* <h1 key={holder[this.state.index].posterId}>{holder[this.state.index].postBody.description}</h1> */}
              <button className="dislike-button fl w-30 bg-washed-red br3 grow" >Dislike</button>
              <button className="like-button fl w-30 bg-washed-green br3 grow" onClick={() => this.makerequets(this.state.holder)} >Like</button>
            </div>
        }

      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Swiper)
