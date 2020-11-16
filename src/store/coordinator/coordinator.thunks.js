import * as coordinatorActions from './coordinator.actions'
import { CoordinatorAPI } from 'hermezjs'

function fetchCoordinator (forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadCoordinator())

    return CoordinatorAPI.getCoordinator(forgerAddr)
      .then(res => dispatch(coordinatorActions.loadCoordinatorSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadCoordinatorFailure(err)))
  }
}

function fetchBatches (forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBatches())

    return CoordinatorAPI.getBatches(forgerAddr)
      .then(res => dispatch(coordinatorActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBatchesFailure(err)))
  }
}

function fetchBids (slotNum, forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBids())

    return CoordinatorAPI.getBids(slotNum, forgerAddr)
      .then(res => dispatch(coordinatorActions.loadBidsSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBidsFailure(err)))
  }
}

export { fetchCoordinator, fetchBatches, fetchBids }
