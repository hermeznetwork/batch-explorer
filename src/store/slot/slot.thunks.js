import * as slotActions from './slot.actions'
import { CoordinatorAPI } from 'hermezjs'

function fetchSlot (slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadSlot())

    return CoordinatorAPI.getSlot(slotNum)
      .then(res => dispatch(slotActions.loadSlotSuccess(res)))
      .catch(err => dispatch(slotActions.loadSlotFailure(err)))
  }
}

function fetchBids (slotNum, forgerAddr) {
  return (dispatch) => {
    dispatch(slotActions.loadBids())

    return CoordinatorAPI.getBids(slotNum, forgerAddr)
      .then(res => dispatch(slotActions.loadBidsSuccess(res)))
      .catch(err => dispatch(slotActions.loadBidsFailure(err)))
  }
}

function fetchBatches (forgerAddr, slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadBatches())

    return CoordinatorAPI.getBatches(forgerAddr, slotNum)
      .then(res => dispatch(slotActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(slotActions.loadBatchesFailure(err)))
  }
}

export { fetchSlot, fetchBids, fetchBatches }
