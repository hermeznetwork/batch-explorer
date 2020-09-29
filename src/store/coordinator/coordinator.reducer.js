import { coordinatorActionTypes } from './coordinator.actions'

const initialCoordinatorState = {
  coordinatorTask: {
    status: 'pending'
  },
  batchesTask: {
    status: 'pending'
  },
  bidsTask: {
    status: 'pending'
  }
}

function coordinatorReducer (state = initialCoordinatorState, action) {
  switch (action.type) {
    case coordinatorActionTypes.LOAD_COORDINATOR: {
      return {
        ...state,
        coordinatorTask: {
          status: 'loading'
        }
      }
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_SUCCESS: {
      return {
        ...state,
        coordinatorTask: {
          status: 'successful',
          data: action.coordinator
        }
      }
    }
    case coordinatorActionTypes.LOAD_COORDINATOR_FAILURE: {
      return {
        ...state,
        coordinatorTask: {
          status: 'failed',
          error: 'An error ocurred loading the coordinator'
        }
      }
    }
    case coordinatorActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask: {
          status: 'loading'
        }
      }
    }
    case coordinatorActionTypes.LOAD_BATCHES_SUCCESS: {
      return {
        ...state,
        batchesTask: {
          status: 'successful',
          data: action.batches
        }
      }
    }
    case coordinatorActionTypes.LOAD_BATCHES_FAILURE: {
      return {
        ...state,
        batchesTask: {
          status: 'failed',
          error: 'An error ocurred loading the batch'
        }
      }
    }
    case coordinatorActionTypes.LOAD_BIDS: {
      return {
        ...state,
        bidsTask: {
          status: 'loading'
        }
      }
    }
    case coordinatorActionTypes.LOAD_BIDS_SUCCESS: {
      return {
        ...state,
        bidsTask: {
          status: 'successful',
          data: action.bids
        }
      }
    }
    case coordinatorActionTypes.LOAD_BID_FAILURE: {
      return {
        ...state,
        bidsTask: {
          status: 'failed',
          error: 'An error ocurred loading bids'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default coordinatorReducer
