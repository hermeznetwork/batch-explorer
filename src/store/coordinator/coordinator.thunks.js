import * as coordinatorActions from './coordinator.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches coordinator details for the specified bidder address
 * @param {string} forgerAddr - Forger address
 * @returns {void}
 */
function fetchCoordinator (forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadCoordinator())

    return CoordinatorAPI.getCoordinators(forgerAddr)
      .then(res => {
        if (res.coordinators.length > 0) {
          dispatch(coordinatorActions.loadCoordinatorSuccess(res.coordinators[0]))
        } else {
          dispatch(coordinatorActions.loadCoordinatorFailure('Coordinator not found'))
        }
      })
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

    return CoordinatorAPI.getBatches(forgerAddr, undefined, fromItem)
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
