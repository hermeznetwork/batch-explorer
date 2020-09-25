import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import globalReducer from './global/global.reducer'
import homeReducer from './home/home.reducer'
import batchReducer from './batch/batch.reducer'
import coordinatorReducer from './coordinator/coordinator.reducer'
import userAccountReducer from './user-account/user-account.reducer'
import transactionReducer from './transaction/transaction.reducer'
import slotReducer from './slot/slot.reducer'
import tokenAccountReducer from './token-account/token-account.reducer'

const rootReducer = combineReducers({
  global: globalReducer,
  home: homeReducer,
  batch: batchReducer,
  coordinator: coordinatorReducer,
  userAccount: userAccountReducer,
  transaction: transactionReducer,
  slot: slotReducer,
  tokenAccount: tokenAccountReducer
})

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
