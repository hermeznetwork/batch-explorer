export const slotActionTypes = {
  LOAD_SLOT: '[SLOT] LOAD SLOT',
  LOAD_SLOT_SUCCESS: '[SLOT] LOAD SLOT SUCCESS',
  LOAD_SLOT_FAILURE: '[SLOT] LOAD SLOT FAILURE'
}

function loadSlot () {
  return {
    type: slotActionTypes.LOAD_SLOT
  }
}

function loadSlotSuccess (slot) {
  return {
    type: slotActionTypes.LOAD_SLOT_SUCCESS,
    slot
  }
}

function loadSlotFailure () {
  return {
    type: slotActionTypes.LOAD_SLOT_FAILURE
  }
}

export {
  loadSlot,
  loadSlotSuccess,
  loadSlotFailure
}
