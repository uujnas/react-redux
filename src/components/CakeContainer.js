import React from 'react'
import { buyCake } from '../redux/cake/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>No of cakes { props.noOfCakes }</h2>
      <button onClick = { props.buyCake } >BUY CAKE </button>
    </div>
  )
}

const mapStateToProps = state =>{  //takes redux state as parameter and return object
  return {
    noOfCakes: state.noOfCakes
  }
}

const mapDispatchToProps = (dispatch) => { //takes redux dispatch as a parameter and return an object as a function
  return {
    buyCake: () => {
      dispatch(buyCake())   //action creator
    }
  }
}

// export default CakeContainer

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)