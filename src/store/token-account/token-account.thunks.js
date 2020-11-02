import * as tokenAccountActionTypes from './token-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccount (accountIndex) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadAccount())

    return rollupApi.getAccount(accountIndex)
      .then(res => dispatch(tokenAccountActionTypes.loadAccountSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadAccountFailure(err)))
  }
}

function fetchTransactions (accountIndex, fromItem) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadTransactions())

    return rollupApi.getHistoryTransactions(undefined, undefined, undefined, accountIndex, fromItem)
      .then(res => dispatch(tokenAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }
