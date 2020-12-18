import { homeActionTypes } from './home.actions'
import { getPaginationData } from '../../utils/api'

const initialHomeState = {
  batchesTask: {
    status: 'pending'
  },
  overviewTask: {
    status: 'pending'
  }
}

function homeReducer (state = initialHomeState, action) {
  switch (action.type) {
    case homeActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask: state.batchesTask.status === 'pending'
          ? { status: 'loading' }
          : { status: 'reloading', data: state.batchesTask.data }
      }
    }
    case homeActionTypes.LOAD_BATCHES_SUCCESS: {
      const batches = state.batchesTask.status === 'reloading'
        ? [...state.batchesTask.data.batches, ...action.data.batches]
        : action.data.batches
      const pagination = getPaginationData(action.data.pendingItems, batches)

      // Reverse the order for displaying last bathes as first ones
      batches.reverse()

      return {
        ...state,
        batchesTask: {
          status: 'successful',
          data: { batches, pagination }
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
    case homeActionTypes.LOAD_OVERVIEW: {
      return {
        ...state,
        overviewTask: {
          status: 'loading'
        }
      }
    }
    case homeActionTypes.LOAD_OVERVIEW_SUCCESS: {
      return {
        ...state,
        overviewTask: {
          status: 'successful',
          data: action.overview
        }
      }
    }
    case homeActionTypes.LOAD_OVERVIEW_FAILURE: {
      return {
        ...state,
        overviewTask: {
          status: 'failed',
          error: 'An error ocurred loading the stats and metrics'
        }
      }
    }
    case homeActionTypes.RESET_STATE: {
      return initialHomeState
    }
    default: {
      return state
    }
  }
}

export default homeReducer
