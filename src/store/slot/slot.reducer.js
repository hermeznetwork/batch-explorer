import { slotActionTypes } from './slot.actions'

const initialSlotState = {
  slotTask: {
    status: 'pending'
  }
}

function slotReducer (state = initialSlotState, action) {
  switch (action.type) {
    case slotActionTypes.LOAD_SLOTS: {
      return {
        ...state,
        slotTask: {
          status: 'loading'
        }
      }
    }
    case slotActionTypes.LOAD_SLOTS_SUCCESS: {
      return {
        ...state,
        slotTask: {
          status: 'successful',
          data: action.slot
        }
      }
    }
    case slotActionTypes.LOAD_SLOTS_FAILURE: {
      return {
        ...state,
        slotTask: {
          status: 'failed',
          error: 'An error ocurred loading the slot'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default slotReducer