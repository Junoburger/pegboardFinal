import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './swiper.css'
import '../Login/LoginStyle.css'
import '../../App.css'
import logFade from '../../images/pegboardfade.png'

const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    minWidth: 150,
    color: 'black',


  },
  0: {
    backgroundColor: '#fff',

  },
  1: {
    backgroundColor: '#fff',

  },
  2: {
    backgroundColor: '#fff',

  },
};





function Slide(props) {
  const holder = props.data
  return (
    <div className="App">
    <SwipeableViews  enableMouseEvents onChangeIndex ={(index, indexLatest, meta)=> {props.increment(index)}}>

      {holder.map((user, index) => { return(
        <div style={Object.assign({}, styles.slide, styles[index])}>
        <div className="border-div" />
        <img src={logFade} width="250px" alt="PegBoardLogo" />
        <img src={props.users[user.posterId].image} className="userImage" />
        <h2>{props.users[user.posterId].name}</h2>
        <h2>{props.users[user.posterId].email}</h2>
      </div>) })}

    </SwipeableViews>
    </div>
  );
}

export default Slide;
