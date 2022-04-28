export const transactionActionTypes = {
  LOAD_TRANSACTION: "[TRANSACTION] LOAD TRANSACTION",
  LOAD_TRANSACTION_SUCCESS: "[TRANSACTION] LOAD TRANSACTION SUCCESS",
  LOAD_TRANSACTION_FAILURE: "[TRANSACTION] LOAD TRANSACTION FAILURE",
};

function loadTransaction() {
  return {
    type: transactionActionTypes.LOAD_TRANSACTION,
  };
}

function loadTransactionSuccess(transaction) {
  return {
    type: transactionActionTypes.LOAD_TRANSACTION_SUCCESS,
    transaction,
  };
}

function loadTransactionFailure() {
  return {
    type: transactionActionTypes.LOAD_TRANSACTION_FAILURE,
  };
}

export { loadTransaction, loadTransactionSuccess, loadTransactionFailure };
