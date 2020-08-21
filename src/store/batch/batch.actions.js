export const batchActionTypes = {
  LOAD_BATCH: 'LOAD BATCH',
  LOAD_BATCH_SUCCESS: 'LOAD BATCH SUCCESS',
  LOAD_BATCH_FAILURE: 'LOAD BATCH FAILURE'
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

export {
  loadBatch,
  loadBatchSuccess,
  loadBatchFailure
}
