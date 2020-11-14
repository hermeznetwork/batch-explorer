import { slotActionTypes } from './slot.actions'
import { getPaginationData } from '../../utils/api'

const initialSlotState = {
  slotTask: {
    status: 'pending'
  },
  bidsTask: {
    status: 'pending'
  },
  batchesTask: {
    status: 'pending'
  }
}

function slotReducer (state = initialSlotState, action) {
  switch (action.type) {
    case slotActionTypes.LOAD_SLOT: {
      return {
        ...state,
        slotTask: {
          status: 'loading'
        }
      }
    }
    case slotActionTypes.LOAD_SLOT_SUCCESS: {
      return {
        ...state,
        slotTask: {
          status: 'successful',
          data: action.slot
        }
      }
    }
    case slotActionTypes.LOAD_SLOT_FAILURE: {
      return {
        ...state,
        slotTask: {
          status: 'failed',
          error: 'An error ocurred loading the slot'
        }
      }
    }
    case slotActionTypes.LOAD_BIDS: {
      return {
        ...state,
        bidsTask: {
          status: 'loading'
        }
      }
    }
    case slotActionTypes.LOAD_BIDS_SUCCESS: {
      const bids = state.bidsTask.status === 'reloading'
        ? [...state.bidsTask.data.bids, ...action.data.bids]
        : action.data.bids
      const pagination = getPaginationData(action.data.pendingItems)

      return {
        ...state,
        bidsTask: {
          status: 'successful',
          data: { bids, pagination }
        }
      }
    }
    case slotActionTypes.LOAD_BID_FAILURE: {
      return {
        ...state,
        bidsTask: {
          status: 'failed',
          error: 'An error ocurred loading bids'
        }
      }
    }
    case slotActionTypes.LOAD_BATCHES: {
      return {
        ...state,
        batchesTask: {
          status: 'loading'
        }
      }
    }
    case slotActionTypes.LOAD_BATCHES_SUCCESS: {
      const batches = state.batchesTask.status === 'reloading'
        ? [...state.batchesTask.data.batches, ...action.data.batches]
        : action.data.batches
      const pagination = getPaginationData(action.data.pendingItems)

      return {
        ...state,
        batchesTask: {
          status: 'successful',
          data: { batches, pagination }
        }
      }
    }
    case slotActionTypes.LOAD_BATCHES_FAILURE: {
      return {
        ...state,
        batchesTask: {
          status: 'failed',
          error: 'An error ocurred loading the batch'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default slotReducer
