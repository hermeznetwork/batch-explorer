import * as userAccountActionTypes from './user-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccount (address, fromItem) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadAccount())

    return rollupApi.getAccounts(address, fromItem)
      .then(res => dispatch(userAccountActionTypes.loadAccountSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadAccountFailure(err)))
  }
}

function fetchTransactions (address, fromItem) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadTransactions())

    return rollupApi.getHistoryTransactions(address, undefined, undefined, undefined, fromItem)
      .then(res => dispatch(userAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }
