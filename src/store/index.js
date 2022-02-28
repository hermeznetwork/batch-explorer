import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import homeReducer from "./home/home.reducer";
import batchReducer from "./batch/batch.reducer";
import coordinatorReducer from "./coordinator/coordinator.reducer";
import userAccountReducer from "./user-account/user-account.reducer";
import transactionReducer from "./transaction/transaction.reducer";
import slotReducer from "./slot/slot.reducer";
import tokenAccountReducer from "./token-account/token-account.reducer";
import tokensReducer from "./tokens/tokens.reducer";
import searchReducer from "./search/search.reducer";

function createRootReducer(history) {
  return combineReducers({
    home: homeReducer,
    batch: batchReducer,
    coordinator: coordinatorReducer,
    userAccount: userAccountReducer,
    transaction: transactionReducer,
    slot: slotReducer,
    tokenAccount: tokenAccountReducer,
    tokens: tokensReducer,
    search: searchReducer,
    router: connectRouter(history),
  });
}

function configureStore(history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const rootReducer = createRootReducer(history);

  return createStore(rootReducer, composedEnhancers);
}

export default configureStore;
