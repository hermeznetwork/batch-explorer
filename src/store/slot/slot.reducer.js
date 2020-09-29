import { slotActionTypes } from './slot.actions'

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
      return {
        ...state,
        bidsTask: {
          status: 'successful',
          data: action.bids
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
      return {
        ...state,
        batchesTask: {
          status: 'successful',
          data: action.batches
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
