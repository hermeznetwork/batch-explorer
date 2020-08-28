export const coordinatorActionTypes = {
  LOAD_COORDINATOR: '[COORDINATOR] LOAD COORDINATOR',
  LOAD_COORDINATOR_SUCCESS: '[COORDINATOR] LOAD COORDINATOR SUCCESS',
  LOAD_COORDINATOR_FAILURE: '[COORDINATOR] LOAD COORDINATOR FAILURE',
  LOAD_BATCHES: '[COORDINATOR] LOAD BATCHES',
  LOAD_BATCHES_SUCCESS: '[COORDINATOR] LOAD BATCHES SUCCESS',
  LOAD_BATCHES_FAILURE: '[COORDINATOR] LOAD BATCHES FAILURE'
}

function loadCoordinator () {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR
  }
}

function loadCoordinatorSuccess (coordinator) {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR_SUCCESS,
    coordinator
  }
}

function loadCoordinatorFailure () {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR_FAILURE
  }
}

function loadBatches () {
  return {
    type: coordinatorActionTypes.LOAD_BATCHES
  }
}

function loadBatchesSuccess (batches) {
  return {
    type: coordinatorActionTypes.LOAD_BATCHES_SUCCESS,
    batches
  }
}

function loadBatchesFailure () {
  return {
    type: coordinatorActionTypes.LOAD_BATCHES_FAILURE
  }
}

export {
  loadCoordinator,
  loadCoordinatorSuccess,
  loadCoordinatorFailure,
  loadBatches,
  loadBatchesSuccess,
  loadBatchesFailure
}
