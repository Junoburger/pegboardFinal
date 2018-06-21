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

    <SwipeableViews  enableMouseEvents on ={(index, indexLatest, meta)=> props.makerequest(holder,index-1)}>

      {holder.map((user, index) => { return <div style={Object.assign({}, styles.slide, styles[index])}>
        <p>{props.users[user.posterId].userId}</p>
        <p>{props.users[user.posterId].name}</p>
        <p>{props.users[user.posterId].email}</p>
      </div> })}

    </SwipeableViews>
  );
}

export default Slide;
