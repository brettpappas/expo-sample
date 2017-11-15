'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

// Navigation
import { reducer as tabBarReducer } from './TabBar/reducer';
import { NavigatorTabOne } from './TabOne/routes'
import { NavigatorTabTwo } from './TabTwo/routes'
import { NavigatorTabThree } from './TabThree/routes'

// Middleware
const middleware = () => {
  return applyMiddleware(logger)
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state, action) => NavigatorTabOne.router.getStateForAction(action, state),
    tabTwo: (state, action) => NavigatorTabTwo.router.getStateForAction(action, state),
    tabThree: (state, action) => NavigatorTabThree.router.getStateForAction(action, state),
  }),
  // turn off redux logging
  // middleware(),
)
