export const userAccountActionTypes = {
  LOAD_ACCOUNT: "[USER ACCOUNT] LOAD ACCOUNT",
  LOAD_ACCOUNT_SUCCESS: "[USER ACCOUNT] LOAD ACCOUNT SUCCESS",
  LOAD_ACCOUNT_FAILURE: "[USER ACCOUNT] LOAD ACCOUNT FAILURE",
  LOAD_TRANSACTIONS: "[USER ACCOUNT] LOAD TRANSACTIONS",
  LOAD_TRANSACTIONS_SUCCESS: "[USER ACCOUNT] LOAD TRANSACTIONS SUCCESS",
  LOAD_TRANSACTIONS_FAILURE: "[USER ACCOUNT] LOAD TRANSACTIONS FAILURE",
  RESET_STATE: "[USER ACCOUNT] RESET STATE",
};

function loadAccount() {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT,
  };
}

function loadAccountSuccess(accounts) {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT_SUCCESS,
    data: accounts,
  };
}

function loadAccountFailure() {
  return {
    type: userAccountActionTypes.LOAD_ACCOUNT_FAILURE,
  };
}

function loadTransactions() {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS,
  };
}

function loadTransactionsSuccess(transactions) {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS,
    data: transactions,
  };
}

function loadTransactionsFailure() {
  return {
    type: userAccountActionTypes.LOAD_TRANSACTIONS_FAILURE,
  };
}

function resetState() {
  return {
    type: userAccountActionTypes.RESET_STATE,
  };
}

export {
  loadAccount,
  loadAccountSuccess,
  loadAccountFailure,
  loadTransactions,
  loadTransactionsSuccess,
  loadTransactionsFailure,
  resetState,
};
