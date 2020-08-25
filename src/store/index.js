import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import globalReducer from './global/global.reducer'
import homeReducer from './home/home.reducer'
import batchReducer from './batch/batch.reducer'

const rootReducer = combineReducers({
  global: globalReducer,
  home: homeReducer,
  batch: batchReducer
})

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
