import { slotActionTypes } from './slot.actions'

const initialSlotState = {
  slotTask: {
    status: 'pending'
  },
  bidsTask: {
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
    default: {
      return state
    }
  }
}

export default slotReducer
