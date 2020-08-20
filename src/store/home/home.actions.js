export const homeActionTypes = {
  LOAD_BATCHES: 'LOAD BATCHES',
  LOAD_BATCHES_SUCCESS: 'LOAD BATCHES SUCCESS',
  LOAD_BATCHES_FAILURE: 'LOAD BATCHES FAILURE'
}

function loadBatches () {
  return {
    type: homeActionTypes.LOAD_BATCHES
  }
}

function loadBatchesSuccess (batches) {
  return {
    type: homeActionTypes.LOAD_BATCHES_SUCCESS,
    batches: batches
  }
}

function loadBatchesFailure () {
  return {
    type: homeActionTypes.LOAD_BATCHES_FAILURE
  }
}

export {
  loadBatches,
  loadBatchesSuccess,
  loadBatchesFailure
}
