export const coordinatorActionTypes = {
  LOAD_COORDINATOR: '[COORDINATOR] LOAD COORDINATOR',
  LOAD_COORDINATOR_SUCCESS: '[COORDINATOR] LOAD COORDINATOR SUCCESS',
  LOAD_COORDINATOR_FAILURE: '[COORDINATOR] LOAD COORDINATOR FAILURE',
  LOAD_COORDINATOR_VERSION: '[COORDINATOR] LOAD COORDINATOR VERSION',
  LOAD_COORDINATOR_VERSION_SUCCESS: '[COORDINATOR] LOAD COORDINATOR VERSION SUCCESS',
  LOAD_COORDINATOR_VERSION_FAILURE: '[COORDINATOR] LOAD COORDINATOR VERSION FAILURE',
  LOAD_BATCHES: '[COORDINATOR] LOAD BATCHES',
  LOAD_BATCHES_SUCCESS: '[COORDINATOR] LOAD BATCHES SUCCESS',
  LOAD_BATCHES_FAILURE: '[COORDINATOR] LOAD BATCHES FAILURE',
  LOAD_BIDS: '[COORDINATOR] LOAD BIDS',
  LOAD_BIDS_SUCCESS: '[COORDINATOR] LOAD BIDS SUCCESS',
  LOAD_BIDS_FAILURE: '[COORDINATOR] LOAD BIDS FAILURE',
  RESET_STATE: '[COORDINATOR] RESET STATE'
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

function loadCoordinatorVersion () {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR_VERSION
  }
}

function loadCoordinatorVersionSuccess (data) {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR_VERSION_SUCCESS,
    data
  }
}

function loadCoordinatorVersionFailure () {
  return {
    type: coordinatorActionTypes.LOAD_COORDINATOR_VERSION_FAILURE
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
    data: batches
  }
}

function loadBatchesFailure () {
  return {
    type: coordinatorActionTypes.LOAD_BATCHES_FAILURE
  }
}

function loadBids () {
  return {
    type: coordinatorActionTypes.LOAD_BIDS
  }
}

function loadBidsSuccess (bids) {
  return {
    type: coordinatorActionTypes.LOAD_BIDS_SUCCESS,
    data: bids
  }
}

function loadBidsFailure () {
  return {
    type: coordinatorActionTypes.LOAD_BIDS_FAILURE
  }
}

function resetState () {
  return {
    type: coordinatorActionTypes.RESET_STATE
  }
}

export {
  loadCoordinator,
  loadCoordinatorSuccess,
  loadCoordinatorFailure,
  loadCoordinatorVersion,
  loadCoordinatorVersionSuccess,
  loadCoordinatorVersionFailure,
  loadBatches,
  loadBatchesSuccess,
  loadBatchesFailure,
  loadBids,
  loadBidsSuccess,
  loadBidsFailure,
  resetState
}
