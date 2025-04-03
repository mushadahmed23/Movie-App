import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import {thunk }from 'redux-thunk';
import './index.css'
import App from './components/App'
import combineReducers from './reducers'

// const logger= function({dispatch,getState}){
//   return function(next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE=',action.type  );
//       next(action)
//     }
//   }
// }

//currying the logger
const logger = (dispatch, getState) => (next) => (action) => {
  console.log('ACTION_TYPE=', action.type);
  next(action)
};

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//  if(typeof action =='function'){
 
//   return  action(dispatch,getState);
//  }
//   next(action)
// };


const store = createStore(combineReducers, applyMiddleware(logger,thunk));


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]

// })
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
)
