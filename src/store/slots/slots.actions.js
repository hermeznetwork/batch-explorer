export const slotsActionTypes = {
  LOAD_SLOTS: '[SLOTS] LOAD SLOTS',
  LOAD_SLOTS_SUCCESS: '[SLOTS] LOAD SLOTS SUCCESS',
  LOAD_SLOTS_FAILURE: '[SLOTS] LOAD SLOTS FAILURE'
}

function loadSlots () {
  return {
    type: slotsActionTypes.LOAD_SLOTS
  }
}

function loadSlotsSuccess (slots) {
  return {
    type: slotsActionTypes.LOAD_SLOTS_SUCCESS,
    slots
  }
}

function loadSlotsFailure () {
  return {
    type: slotsActionTypes.LOAD_SLOTS_FAILURE
  }
}

export {
  loadSlots,
  loadSlotsSuccess,
  loadSlotsFailure
}
