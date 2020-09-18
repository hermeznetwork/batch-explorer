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

function fetchBids (slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadBids())

    return rollupApi.getBids(slotNum)
      .then(res => dispatch(slotActions.loadBidsSuccess(res)))
      .catch(err => dispatch(slotActions.loadBidsFailure(err)))
  }
}

export { fetchSlot, fetchBids }
