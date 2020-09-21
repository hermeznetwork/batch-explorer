import * as homeActions from './home.actions'
import * as rollupApi from '../../apis/rollup'

function fetchBatches () {
  return (dispatch) => {
    dispatch(homeActions.loadBatches())

    return rollupApi.getBatches()
      .then(res => dispatch(homeActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(homeActions.loadBatchesFailure(err)))
  }
}

function fetchOverview () {
  return (dispatch) => {
    dispatch(homeActions.loadOverview())

    return rollupApi.getOverview()
      .then((res) => dispatch(homeActions.loadOverviewSuccess(res)))
      .catch(err => dispatch(homeActions.loadOverviewFailure(err)))
  }
}

export { fetchBatches, fetchOverview }
