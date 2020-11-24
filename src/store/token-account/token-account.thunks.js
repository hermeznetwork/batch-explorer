import * as tokenAccountActionTypes from './token-account.actions'
import { CoordinatorAPI } from 'hermezjs'

/**
 * Fetches the account details for the specified account index
 * @param {string} accountIndex - Account index
 * @returns {void}
 */
function fetchAccount (accountIndex) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadAccount())

    return CoordinatorAPI.getAccount(accountIndex)
      .then(res => dispatch(tokenAccountActionTypes.loadAccountSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadAccountFailure(err)))
  }
}

/**
 * Fetches the transactions details for the specified account index
 * @param {string} accountIndex - Account index
 * @returns {void}
 */
function fetchTransactions (accountIndex, fromItem) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadTransactions())

    return CoordinatorAPI.getTransactions(undefined, undefined, undefined, accountIndex, fromItem)
      .then(res => dispatch(tokenAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }
