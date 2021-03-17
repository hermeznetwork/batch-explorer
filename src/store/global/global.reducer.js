import { globalActionTypes } from './global.actions'

const initialGlobalState = {
  maintenanceStatusTask: {
    status: 'pending'
  }
}

function globalReducer (state = initialGlobalState, action) {
  switch (action.type) {
    case globalActionTypes.LOAD_MAINTENANCE_STATUS: {
      return {
        ...state,
        maintenanceStatusTask: {
          status: 'loading'
        }
      }
    }
    case globalActionTypes.LOAD_MAINTENANCE_STATUS_SUCCESS: {
      return {
        ...state,
        maintenanceStatusTask: {
          status: 'successful',
          isBatchExplorerUnderMaintenance: action.data.isBatchExplorerUnderMaintenance
        }
      }
    }
    case globalActionTypes.LOAD_MAINTENANCE_STATUS_FAILURE: {
      return {
        ...state,
        maintenanceStatusTask: {
          status: 'failed',
          error: 'An error ocurred. Maintenance status cannot be loaded.'
        }
      }
    }
    case globalActionTypes.RESET_STATE: {
      return initialGlobalState
    }
    default: {
      return state
    }
  }
}

export default globalReducer
