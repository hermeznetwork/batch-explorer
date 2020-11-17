export const batchActionTypes = {
  LOAD_BATCH: '[BATCH] LOAD BATCH',
  LOAD_BATCH_SUCCESS: '[BATCH] LOAD BATCH SUCCESS',
  LOAD_BATCH_FAILURE: '[BATCH] LOAD BATCH FAILURE',
  LOAD_BATCH_TRANSACTIONS: '[BATCH] LOAD BATCH TRANSACTIONS',
  LOAD_BATCH_TRANSACTIONS_SUCCESS: '[BATCH] LOAD BATCH TRANSACTIONS SUCCESS',
  LOAD_BATCH_TRANSACTIONS_FAILURE: '[BATCH] LOAD BATCH TRANSACTIONS FAILURE',
  RESET_STATE: '[BATCH] RESET STATE'
}

function loadBatch () {
  return {
    type: batchActionTypes.LOAD_BATCH
  }
}

function loadBatchSuccess (batch) {
  return {
    type: batchActionTypes.LOAD_BATCH_SUCCESS,
    batch
  }
}

function loadBatchFailure () {
  return {
    type: batchActionTypes.LOAD_BATCH_FAILURE
  }
}

function loadTransactions () {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS
  }
}

function loadTransactionsSuccess (transactions) {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS_SUCCESS,
    data: transactions
  }
}

function loadTransactionsFailure () {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS_FAILURE
  }
}

function resetState () {
  return {
    type: batchActionTypes.RESET_STATE
  }
}

export {
  loadBatch,
  loadBatchSuccess,
  loadBatchFailure,
  loadTransactions,
  loadTransactionsSuccess,
  loadTransactionsFailure,
  resetState
}
