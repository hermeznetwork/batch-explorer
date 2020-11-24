import * as coordinatorActions from './coordinator.actions'
import { CoordinatorAPI } from 'hermezjs'

/**
 * Fetches coordinator details for the specified bidder address
 * @param {string} bidderAddr - Bidder address
 * @returns {void}
 */
function fetchCoordinator (bidderAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadCoordinator())

    return CoordinatorAPI.getCoordinator(bidderAddr)
      .then(res => dispatch(coordinatorActions.loadCoordinatorSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadCoordinatorFailure(err)))
  }
}

/**
 * Fetches the batches list for the specified forger address
 * @param {string} forgerAddr - Forger address
 * @returns {void}
 */
function fetchBatches (forgerAddr, fromItem) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBatches())

    return CoordinatorAPI.getBatches(forgerAddr, fromItem)
      .then(res => dispatch(coordinatorActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBatchesFailure(err)))
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
    dispatch(coordinatorActions.loadBids())

    return CoordinatorAPI.getBids(slotNum, bidderAddr, fromItem)
      .then(res => dispatch(coordinatorActions.loadBidsSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBidsFailure(err)))
  }
}

export { fetchCoordinator, fetchBatches, fetchBids }
