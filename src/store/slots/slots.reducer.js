import { slotsActionTypes } from './slots.actions'

const initialSlotsState = {
  slotsTask: {
    status: 'pending'
  }
}

function slotsReducer (state = initialSlotsState, action) {
  switch (action.type) {
    case slotsActionTypes.LOAD_SLOTS: {
      return {
        ...state,
        slotsTask: {
          status: 'loading'
        }
      }
    }
    case slotsActionTypes.LOAD_SLOTS_SUCCESS: {
      return {
        ...state,
        slotsTask: {
          status: 'successful',
          data: action.slots
        }
      }
    }
    case slotsActionTypes.LOAD_SLOTS_FAILURE: {
      return {
        ...state,
        slotsTask: {
          status: 'failed',
          error: 'An error ocurred loading the slots'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default slotsReducer
