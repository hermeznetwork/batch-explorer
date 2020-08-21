export const batchActionTypes = {
  LOAD_BATCH: 'LOAD BATCH',
  LOAD_BATCH_SUCCESS: 'LOAD BATCH SUCCESS',
  LOAD_BATCH_FAILURE: 'LOAD BATCH FAILURE',
  LOAD_BATCH_TRANSACTIONS: 'LOAD BATCH',
  LOAD_BATCH_TRANSACTIONS_SUCCESS: 'LOAD BATCH TRANSACTIONS SUCCESS',
  LOAD_BATCH_TRANSACTIONS_FAILURE: 'LOAD BATCH TRANSACTIONS FAILURE'
}

function loadBatch () {
  return {
    type: batchActionTypes.LOAD_BATCH
  }
}

function loadBatchSuccess (batch) {
  return {
    type: batchActionTypes.LOAD_BATCH_SUCCESS,
    batch: batch
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
    transactions: transactions
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
