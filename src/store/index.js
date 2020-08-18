import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import globalReducer from './global/reducer'

const rootReducer = combineReducers({
  global: globalReducer
})

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
