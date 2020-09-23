export const slotActionTypes = {
  LOAD_SLOT: '[SLOT] LOAD SLOT',
  LOAD_SLOT_SUCCESS: '[SLOT] LOAD SLOT SUCCESS',
  LOAD_SLOT_FAILURE: '[SLOT] LOAD SLOT FAILURE',
  LOAD_BIDS: '[SLOT] LOAD BIDS',
  LOAD_BIDS_SUCCESS: '[SLOT] LOAD BIDS SUCCESS',
  LOAD_BIDS_FAILURE: '[SLOT] LOAD BIDS FAILURE'
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

function loadBids () {
  return {
    type: slotActionTypes.LOAD_BIDS
  }
}

function loadBidsSuccess (bids) {
  return {
    type: slotActionTypes.LOAD_BIDS_SUCCESS,
    bids
  }
}

function loadBidsFailure () {
  return {
    type: slotActionTypes.LOAD_BIDS_FAILURE
  }
}

export {
  loadSlot,
  loadSlotSuccess,
  loadSlotFailure,
  loadBids,
  loadBidsSuccess,
  loadBidsFailure
}
