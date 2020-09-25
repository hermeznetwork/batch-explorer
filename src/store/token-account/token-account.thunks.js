import * as tokenAccountActionTypes from './token-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccount (ethereumAddress, tokenId) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadAccount())

    return rollupApi.getAccounts(ethereumAddress, tokenId)
      .then(res => dispatch(tokenAccountActionTypes.loadAccountSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadAccountFailure(err)))
  }
}

function fetchTransactions (accountIndex) {
  return (dispatch) => {
    dispatch(tokenAccountActionTypes.loadTransactions())

    return rollupApi.getHistoryTransactions(undefined, undefined, undefined, accountIndex)
      .then(res => dispatch(tokenAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(tokenAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }

// http://167.71.59.190:4010/accounts?hermezEthereumAddress=hez%3A0xaa942cfcd25ad4d90a62358b0dd84f33b398262a&tokenIds=4444

// http://167.71.59.190:4010/transactions-history?accountIndex=hez%3ADAI%3A4444
