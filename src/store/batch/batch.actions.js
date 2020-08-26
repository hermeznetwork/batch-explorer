export const batchActionTypes = {
  LOAD_BATCH: '[BATCH] LOAD BATCH',
  LOAD_BATCH_SUCCESS: '[BATCH] LOAD BATCH SUCCESS',
  LOAD_BATCH_FAILURE: '[BATCH] LOAD BATCH FAILURE',
  LOAD_BATCH_TRANSACTIONS: '[BATCH] LOAD BATCH',
  LOAD_BATCH_TRANSACTIONS_SUCCESS: '[BATCH] LOAD BATCH TRANSACTIONS SUCCESS',
  LOAD_BATCH_TRANSACTIONS_FAILURE: '[BATCH] LOAD BATCH TRANSACTIONS FAILURE'
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

function loadBatchTransactions () {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS
  }
}

function loadBatchTransactionsSuccess (transactions) {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS_SUCCESS,
    transactions
  }
}

function loadBatchTransactionsFailure () {
  return {
    type: batchActionTypes.LOAD_BATCH_TRANSACTIONS_FAILURE
  }
}

export {
  loadBatch,
  loadBatchSuccess,
  loadBatchFailure,
  loadBatchTransactions,
  loadBatchTransactionsSuccess,
  loadBatchTransactionsFailure
}
