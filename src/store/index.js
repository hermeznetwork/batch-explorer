import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import globalReducer from './global/global.reducer'
import homeReducer from './home/home.reducer'
import batchReducer from './batch/batch.reducer'
import coordinatorReducer from './coordinator/coordinator.reducer'
import userAccountReducer from './user-account/user-account.reducer'
import transactionReducer from './transaction/transaction.reducer'

const rootReducer = combineReducers({
  global: globalReducer,
  home: homeReducer,
  batch: batchReducer,
  coordinator: coordinatorReducer,
  userAccount: userAccountReducer,
  transaction: transactionReducer
})

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
