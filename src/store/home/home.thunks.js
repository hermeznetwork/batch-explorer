import * as homeActions from './home.actions'
import * as rollupApi from '../../apis/rollup'

function fetchBatches () {
  return (dispatch) => {
    dispatch(homeActions.loadBatches())

    return rollupApi.getBatches()
      .then(res => dispatch(homeActions.loadBatchesSuccess(res.batches)))
      .catch(err => dispatch(homeActions.loadBatchesFailure(err)))
  }
}

export { fetchBatches }
