import * as homeActions from './home.actions'
import { CoordinatorAPI } from 'hermezjs'

function fetchBatches (fromItem) {
  return (dispatch) => {
    dispatch(homeActions.loadBatches())

    return CoordinatorAPI.getBatches()
      .then(res => dispatch(homeActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(homeActions.loadBatchesFailure(err)))
  }
}

function fetchOverview () {
  return (dispatch) => {
    dispatch(homeActions.loadOverview())

    return CoordinatorAPI.getState()
      .then((res) => dispatch(homeActions.loadOverviewSuccess(res)))
      .catch(err => dispatch(homeActions.loadOverviewFailure(err)))
  }
}

export { fetchBatches, fetchOverview }
