import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Cards, { Card } from 'react-swipe-card'

const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    minWidth: 200,
    color: '#fff',

  },
  0: {
    backgroundColor: '#FEA900',
  },
  1: {
    backgroundColor: '#B3DC4A',
  },
  2: {
    backgroundColor: '#6AC0FF',
  },
};





function Slide(props) {
  const holder = props.data
  return (

    <SwipeableViews enableMouseEvents>

      {holder.map((user, index) => { return <div style={Object.assign({}, styles.slide, styles[index])}>{props.users[user.posterId].name}</div> })}

    </SwipeableViews>
  );
}

export default Slide;
