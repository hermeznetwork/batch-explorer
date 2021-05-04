import * as userAccountActionTypes from './user-account.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches the account details (for a list of accounts) for the specified address
 * @param {string} address - Can be hezEthereumAddress or BJJ
 * @returns {void}
 */
function fetchAccounts (address, fromItem) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadAccount())

    return CoordinatorAPI.getAccounts(address, undefined, fromItem)
      .then(res => {
        if (res.accounts.length > 0) {
          dispatch(userAccountActionTypes.loadAccountSuccess(res))
        } else {
          dispatch(userAccountActionTypes.loadAccountFailure())
        }
      })
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

    return CoordinatorAPI.getTransactions(address, undefined, undefined, undefined, fromItem, CoordinatorAPI.PaginationOrder.DESC)
      .then(res => {
        if (res.transactions.length > 0) {
          dispatch(userAccountActionTypes.loadTransactionsSuccess(res))
        } else {
          dispatch(userAccountActionTypes.loadTransactionsFailure())
        }
      })
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccounts, fetchTransactions }
