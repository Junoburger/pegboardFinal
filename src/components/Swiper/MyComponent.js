import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

function MyComponent(props){
  console.log(props);
return (

  props.map(x => {
    return (
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
         hello
      </div>
    </SwipeableViews>
  )}

))

// return(
//   <SwipeableViews enableMouseEvents>
//     <div  style={Object.assign({}, styles.slide, styles.slide1)}>
//       slide 1
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide2)}>
//       slide n°2
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide3)}>
//       slide n°3
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide1)}>
//       slide n°3
//     </div>
//   </SwipeableViews>)

}
export default MyComponent;
