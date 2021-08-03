import { searchActionTypes } from './search.actions'

const initialSearchState = {
  coordinatorTask: {
    status: 'pending'
  },
  accountTask: {
    status: 'pending'
  }
}

function searchReducer (state = initialSearchState, action) {
  switch (action.type) {
    case searchActionTypes.LOAD_COORDINATOR: {
      return {
        ...state,
        coordinatorTask: {
          status: 'loading'
        }
      }
    }
    case searchActionTypes.LOAD_COORDINATOR_SUCCESS: {
      return {
        ...state,
        coordinatorTask: {
          status: 'successful',
          data: action.coordinator
        }
      }
    }
    case searchActionTypes.LOAD_COORDINATOR_FAILURE: {
      return {
        ...state,
        coordinatorTask: {
          status: 'failed',
          error: 'Coordinator does not exist or cannot be loaded.'
        }
      }
    }
    case searchActionTypes.LOAD_ACCOUNT: {
        return {
          ...state,
          accountTask: {
            status: 'loading'
          }
        }
      }
      case searchActionTypes.LOAD_ACCOUNT_SUCCESS: {
        return {
          ...state,
          accountTask: {
            status: 'successful',
            data: action.account
          }
        }
      }
      case searchActionTypes.LOAD_ACCOUNT_FAILURE: {
        return {
          ...state,
          accountTask: {
            status: 'failed',
            error: 'Account does not exist or cannot be loaded.'
          }
        }
      }
    case searchActionTypes.RESET_STATE: {
      return initialSearchState
    }
    default: {
      return state
    }
  }
}

export default searchReducer
