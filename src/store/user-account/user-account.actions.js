export const userAccountActionTypes = {
  LOAD_ACCOUNT: '[ACCOUNT DETAILS] LOAD ACCOUNT',
  LOAD_ACCOUNT_SUCCESS: '[ACCOUNT DETAILS] LOAD ACCOUNT SUCCESS',
  LOAD_ACCOUNT_FAILURE: '[ACCOUNT DETAILS] LOAD ACCOUNT FAILURE',
  LOAD_TRANSACTIONS: '[ACCOUNT DETAILS] LOAD TRANSACTIONS',
  LOAD_TRANSACTIONS_SUCCESS: '[ACCOUNT DETAILS] LOAD TRANSACTIONS SUCCESS',
  LOAD_TRANSACTIONS_FAILURE: '[ACCOUNT DETAILS] LOAD TRANSACTIONS FAILURE'
}

function loadAccount () {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT
  }
}

function loadAccountSuccess (account) {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT_SUCCESS,
    account
  }
}

function loadAccountFailure () {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT_FAILURE
  }
}

function loadTransactions () {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS
  }
}

function loadTransactionsSuccess (transactions) {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS,
    transactions
  }
}

function loadTransactionsFailure () {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS_FAILURE
  }
}

export {
  loadAccount,
  loadAccountSuccess,
  loadAccountFailure,
  loadTransactions,
  loadTransactionsSuccess,
  loadTransactionsFailure
}
