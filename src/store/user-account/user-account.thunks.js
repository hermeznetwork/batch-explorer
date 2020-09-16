import * as userAccountActionTypes from './user-account.actions'
import * as rollupApi from '../../apis/rollup'

function fetchAccount (ethereumAddress) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadAccount())

    return rollupApi.getAccounts(ethereumAddress)
      .then(res => {
        // TODO:
        // 1. Convert each token balance to fiat and then sum all to get a single value for example totalBalanceConvertedToFiat
        // 2. Create an array of all tokens for example [{tokenName, tokenAmount, mountCovertedToFiat}] for "Account" page

        dispatch(userAccountActionTypes.loadAccountSuccess(res.accounts))
      })
      .catch(err => dispatch(userAccountActionTypes.loadAccountFailure(err)))
  }
}

function fetchTransactions (ethereumAddress) {
  return (dispatch) => {
    dispatch(userAccountActionTypes.loadTransactions())

    return rollupApi.getTransactions(ethereumAddress)
      .then(res => dispatch(userAccountActionTypes.loadTransactionsSuccess(res)))
      .catch(err => dispatch(userAccountActionTypes.loadTransactionsFailure(err)))
  }
}

export { fetchAccount, fetchTransactions }
