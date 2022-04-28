export const homeActionTypes = {
  LOAD_BATCHES: "[HOME] LOAD BATCHES",
  LOAD_BATCHES_SUCCESS: "[HOME] LOAD BATCHES SUCCESS",
  LOAD_BATCHES_FAILURE: "[HOME] LOAD BATCHES FAILURE",
  RESET_STATE: "[HOME] RESET STATE",
};

function loadBatches() {
  return {
    type: homeActionTypes.LOAD_BATCHES,
  };
}

function loadBatchesSuccess(batches) {
  return {
    type: homeActionTypes.LOAD_BATCHES_SUCCESS,
    data: batches,
  };
}

function loadBatchesFailure() {
  return {
    type: homeActionTypes.LOAD_BATCHES_FAILURE,
  };
}

function resetState() {
  return {
    type: homeActionTypes.RESET_STATE,
  };
}

export { loadBatches, loadBatchesSuccess, loadBatchesFailure, resetState };
