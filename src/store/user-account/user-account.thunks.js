import * as userAccountActionTypes from './user-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccounts (address, fromItem) {
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

    return rollupApi.getTransactions(address, undefined, undefined, undefined, fromItem)
      .then(res => dispatch(userAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccounts, fetchTransactions }
