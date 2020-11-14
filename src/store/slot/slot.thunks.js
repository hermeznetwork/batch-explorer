import * as slotActions from './slot.actions'
import * as rollupApi from '../../apis/rollup'

function fetchSlot (slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadSlot())

    return rollupApi.getSlot(slotNum)
      .then(res => dispatch(slotActions.loadSlotSuccess(res)))
      .catch(err => dispatch(slotActions.loadSlotFailure(err)))
  }
}

function fetchBids (slotNum, forgerAddr, fromItem) {
  return (dispatch) => {
    dispatch(slotActions.loadBids())

    return rollupApi.getBids(slotNum, forgerAddr, fromItem)
      .then(res => dispatch(slotActions.loadBidsSuccess(res)))
      .catch(err => dispatch(slotActions.loadBidsFailure(err)))
  }
}

function fetchBatches (forgerAddr, slotNum, fromItem) {
  return (dispatch) => {
    dispatch(slotActions.loadBatches())

    return rollupApi.getBatches(forgerAddr, slotNum, fromItem)
      .then(res => dispatch(slotActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(slotActions.loadBatchesFailure(err)))
  }
}

export { fetchSlot, fetchBids, fetchBatches }
