import React from 'react';
import SwipeableViews from 'react-swipeable-views';


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

    <SwipeableViews  enableMouseEvents onChangeIndex ={(index, indexLatest, meta)=> {props.increment(index)}}>

      {holder.map((user, index) => { return <div style={Object.assign({}, styles.slide, styles[index])}>
        <h2>{props.users[user.posterId].userId}</h2>
        <h2>{props.users[user.posterId].name}</h2>
        <h2>{props.users[user.posterId].email}</h2>
      </div> })}

    </SwipeableViews>
  );
}

export default Slide;
