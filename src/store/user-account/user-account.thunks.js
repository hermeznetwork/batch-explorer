import * as userAccountActionTypes from './user-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccount (ethereumAddress) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadAccount())

    return rollupApi.getAccounts(ethereumAddress)
      .then(res => { dispatch(userAccountActionTypes.loadAccountSuccess(res)) })
      .catch(err => dispatch(userAccountActionTypes.loadAccountFailure(err)))
  }
}

function fetchTransactions (ethereumAddress) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadTransactions())

    return rollupApi.getHistoryTransactions(ethereumAddress, undefined, undefined)
      .then(res => dispatch(userAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }
