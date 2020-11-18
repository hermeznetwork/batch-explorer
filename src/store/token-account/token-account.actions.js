export const tokenAccountActionTypes = {
  LOAD_ACCOUNT: '[TOKEN ACCOUNT] LOAD ACCOUNT',
  LOAD_ACCOUNT_SUCCESS: '[TOKEN ACCOUNT] LOAD ACCOUNT SUCCESS',
  LOAD_ACCOUNT_FAILURE: '[TOKEN ACCOUNT] LOAD ACCOUNT FAILURE',
  LOAD_TRANSACTIONS: '[TOKEN ACCOUNT] LOAD TRANSACTIONS',
  LOAD_TRANSACTIONS_SUCCESS: '[TOKEN ACCOUNT] LOAD TRANSACTIONS SUCCESS',
  LOAD_TRANSACTIONS_FAILURE: '[TOKEN ACCOUNT] LOAD TRANSACTIONS FAILURE',
  RESET_STATE: '[TOKEN ACCOUNT] RESET_STATE'
}

function loadAccount () {
  return {
    type: tokenAccountActionTypes.LOAD_ACCOUNT
  }
}

function loadAccountSuccess (account) {
  return {
    type: tokenAccountActionTypes.LOAD_ACCOUNT_SUCCESS,
    account
  }
}

function loadAccountFailure () {
  return {
    type: tokenAccountActionTypes.LOAD_ACCOUNT_FAILURE
  }
}

function loadTransactions () {
  return {
    type: tokenAccountActionTypes.LOAD_TRANSACTIONS
  }
}

function loadTransactionsSuccess (transactions) {
  return {
    type: tokenAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS,
    data: transactions
  }
}

function loadTransactionsFailure () {
  return {
    type: tokenAccountActionTypes.LOAD_TRANSACTIONS_FAILURE
  }
}

function resetState () {
  return {
    type: tokenAccountActionTypes.RESET_STATE
  }
}

export {
  loadAccount,
  loadAccountSuccess,
  loadAccountFailure,
  loadTransactions,
  loadTransactionsSuccess,
  loadTransactionsFailure,
  resetState
}
