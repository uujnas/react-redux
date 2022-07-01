# React-Redux Setup

Redux is a state management framework that can be used with a number of different web technologies, including React.
We can integrate react with redux with `react-redux` library.

1. Install redux and react-redux library in the project
`npm install redux react-redux`

# Redux

Redux has a single state object that's responsible for the entire state of your application. React has redux `store`. This means that any piece of your app you want to update state, it must go through Redux store.
Redux is all about store, action and reducer.  Action is about what to do? Reducer is about how to do? store hold the state of application.

 ### Create Redux Store

  Declare a variable store and assign it to createStore() method, passing in the reducer as an argument.
  
     import { createStore } from "redux"

     const store = createStore(cakeReducer)
<em> You may wonder what the cakeReducer here. i.e `reducer`. Well we will discuss later. First we will go for action. </em>

 ### Redux action

  Action carry a type property that specify type of action that occured. 

  Let's dicuss action creator.
   
   Action creator is a function that literally creates an action object.

    const  BUY_CAKE = "BUY CAKE"

    export const buyCake = () => {
      return {
        type: BUY_CAKE
      }
    }

  a. Dispatch an action event `store.dispatch(action)`
  
     store.dispatch(buyCake()) 

 ### Reducer 
In Redux, Reducer is a function that consist of previousState  and action. The previousState return to a newState. `(previousState, action) => newState`

      const BUY_CAKE = "BUY CAKE"

      const initialState = {
        noOfCakes: 10
      }

      const cakeReducer = (state = initialState, action) => {
        switch(action.type){
          case BUY_CAKE:
            return {
              ...state,
              noOfCakes: state.noOfCakes - 1
            }
          default:
            return state
        }

      }

      export default cakeReducer

  The function uses a switch statement to determine which type of action you are dealing with. The application doesn't lose its current state.

# Connect Redux to React

React Redux provide a small API with two key features: `Provider` and `connect`.

1. `Provider` is a wrapper component from React Redux that wraps your React app. 

Provider takes two props

 i. the redux store
 
 ii. child component of your app.

      import store from './redux/store';
      import { Provider } from 'react-redux';
      import CakeContainer from './components/CakeContainer';

      <Provider store = {store}>
        <CakeContainer />  
      </Provider>

2. `Map State to Props` and `map Dispatch to props`

  Specifying what state and action you want. You accomplish this by creating two functions:
  
  i. mapSateToProps()
  
  ii. mapDispatchToProps()

mapStateToProps: Takes redux state as parameter and return object

      const mapStateToProps = state =>{  
      return {
        noOfCakes: state.noOfCakes
      }
    }

mapDispatchToProps: It takes redux dispatch as a parameter and return an object as a function.

The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store.


     const mapDispatchToProps = (dispatch) => { 
      return {
        buyCake: () => {
          dispatch(buyCake())   //action creator....`disptach(action_creator)`. 
        }
      }
    }

3. Connect React Redux

       import { connect } from 'react-redux'

       connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

4. Now we can easily access state and action as a props from local store.

        function CakeContainer(props) {
          return (
            <div>
              <p>No of cakes { props.noOfCakes }</p>
              <button onClick = { props.buyCake } >BUY CAKE </button>
            </div>
          )
        }
#### Listen to changes
Every time when state changes, log it.

store.subscribe(()=> console.log('store updates', store.getState()))

