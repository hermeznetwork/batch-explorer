import * as userAccountActionTypes from './user-account.actions'
import { CoordinatorAPI } from 'hermezjs'

/**
 * Fetches the account details (for a list of accounts) for the specified address
 * @param {string} address - Can be hezEthereumAddress or BJJ
 * @returns {void}
 */
function fetchAccounts (address, fromItem) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadAccount())

    return CoordinatorAPI.getAccounts(address, undefined, fromItem)
      .then(res => dispatch(userAccountActionTypes.loadAccountSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadAccountFailure(err)))
  }
}

/**
 * Fetches the transactions details for the specified address
 * @param {string} address - Can be hezEthereumAddress or BJJ
 * @returns {void}
 */
function fetchTransactions (address, fromItem) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadTransactions())

    return CoordinatorAPI.getTransactions(address, undefined, undefined, undefined, fromItem)
      .then(res => dispatch(userAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccounts, fetchTransactions }
