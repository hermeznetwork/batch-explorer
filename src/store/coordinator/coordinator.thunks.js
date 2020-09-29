import * as coordinatorActions from './coordinator.actions'
import * as rollupApi from '../../apis/rollup'

function fetchCoordinator (forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadCoordinator())

    return rollupApi.getCoordinator(forgerAddr)
      .then(res => dispatch(coordinatorActions.loadCoordinatorSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadCoordinatorFailure(err)))
  }
}

function fetchBatches (forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBatches())

    return rollupApi.getBatches(forgerAddr)
      .then(res => dispatch(coordinatorActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBatchesFailure(err)))
  }
}

function fetchBids (slotNum, forgerAddr) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBids())

    return rollupApi.getBids(slotNum, forgerAddr)
      .then(res => dispatch(coordinatorActions.loadBidsSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadBidsFailure(err)))
  }
}

export { fetchCoordinator, fetchBatches, fetchBids }
