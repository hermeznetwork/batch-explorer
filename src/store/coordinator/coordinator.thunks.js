import * as coordinatorActions from './coordinator.actions'
import * as rollupApi from '../../apis/rollup'

function fetchCoordinator (coordinatorId) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadCoordinator())

    return rollupApi.getCoordinator(coordinatorId)
      .then(res => dispatch(coordinatorActions.loadCoordinatorSuccess(res)))
      .catch(err => dispatch(coordinatorActions.loadCoordinatorFailure(err)))
  }
}

function fetchBatches (coordinatorId) {
  return (dispatch) => {
    dispatch(coordinatorActions.loadBatches())

    return rollupApi.getBatches(coordinatorId)
      .then(res => dispatch(coordinatorActions.loadBatchesSuccess(res.batches)))
      .catch(err => dispatch(coordinatorActions.loadBatchesFailure(err)))
  }
}

export { fetchCoordinator, fetchBatches }
