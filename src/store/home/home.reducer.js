import { homeActionTypes } from './home.actions'

const initialHomeState = {
  batchesTask: {
    status: 'pending'
  }
}

function homeReducer (state = initialHomeState, action) {
  switch (action.type) {
    case homeActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask: {
          status: 'loading'
        }
      }
    }
    case homeActionTypes.LOAD_BATCHES_SUCCESS: {
      return {
        ...state,
        batchesTask: {
          status: 'successful',
          data: action.batches
        }
      }
    }
    case homeActionTypes.LOAD_BATCHES_FAILURE: {
      return {
        ...state,
        batchesTask: {
          status: 'failed',
          error: 'An error ocurred loading the batches'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default homeReducer
