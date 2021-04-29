import * as slotActions from './slot.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches slot details for the specified slot number
 * @param {string} slotNum - Slot number
 * @returns {void}
 */
function fetchSlot (slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadSlot())

    return CoordinatorAPI.getSlot(slotNum)
      .then(res => dispatch(slotActions.loadSlotSuccess(res)))
      .catch(err => dispatch(slotActions.loadSlotFailure(err)))
  }
}

/**
 * Fetches the bids list for the specified bidder address and slot number
 * @param {string} bidderAddr - Bidder address
 * @param {string} slotNum - Slot number
 * @returns {void}
 */
function fetchBids (slotNum, bidderAddr, fromItem) {
  return (dispatch) => {
    dispatch(slotActions.loadBids())

    return CoordinatorAPI.getBids(slotNum, bidderAddr, fromItem, CoordinatorAPI.PaginationOrder.DESC)
      .then(res => dispatch(slotActions.loadBidsSuccess(res)))
      .catch(err => dispatch(slotActions.loadBidsFailure(err)))
  }
}

/**
 * Fetches the batches list for the specified forger address and slot number
 * @param {string} forgerAddr - Forger address
 * @param {string} slotNum - Slot number
 * @returns {void}
 */
function fetchBatches (forgerAddr, slotNum, fromItem) {
  return (dispatch) => {
    dispatch(slotActions.loadBatches())

    return CoordinatorAPI.getBatches(forgerAddr, slotNum, fromItem)
      .then(res => dispatch(slotActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(slotActions.loadBatchesFailure(err)))
  }
}

export { fetchSlot, fetchBids, fetchBatches }
