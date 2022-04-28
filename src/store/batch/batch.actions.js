export const batchActionTypes = {
  LOAD_BATCH: "[BATCH] LOAD BATCH",
  LOAD_BATCH_SUCCESS: "[BATCH] LOAD BATCH SUCCESS",
  LOAD_BATCH_FAILURE: "[BATCH] LOAD BATCH FAILURE",
  LOAD_TRANSACTIONS: "[BATCH] LOAD TRANSACTIONS",
  LOAD_TRANSACTIONS_SUCCESS: "[BATCH] LOAD TRANSACTIONS SUCCESS",
  LOAD_TRANSACTIONS_FAILURE: "[BATCH] LOAD TRANSACTIONS FAILURE",
  RESET_STATE: "[BATCH] RESET STATE",
};

function loadBatch() {
  return {
    type: batchActionTypes.LOAD_BATCH,
  };
}

function loadBatchSuccess(batch) {
  return {
    type: batchActionTypes.LOAD_BATCH_SUCCESS,
    batch,
  };
}

function loadBatchFailure() {
  return {
    type: batchActionTypes.LOAD_BATCH_FAILURE,
  };
}

function loadTransactions() {
  return {
    type: batchActionTypes.LOAD_TRANSACTIONS,
  };
}

function loadTransactionsSuccess(transactions) {
  return {
    type: batchActionTypes.LOAD_TRANSACTIONS_SUCCESS,
    data: transactions,
  };
}

function loadTransactionsFailure(err) {
  return {
    type: batchActionTypes.LOAD_TRANSACTIONS_FAILURE,
    err: err,
  };
}

function resetState() {
  return {
    type: batchActionTypes.RESET_STATE,
  };
}

export {
  loadBatch,
  loadBatchSuccess,
  loadBatchFailure,
  loadTransactions,
  loadTransactionsSuccess,
  loadTransactionsFailure,
  resetState,
};
