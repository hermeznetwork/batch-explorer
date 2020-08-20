import * as globalActions from './global.actions'
import * as rollupApi from '../../apis/rollup'

function fetchTokens () {
  return (dispatch) => {
    dispatch(globalActions.loadTokens())

    return rollupApi.getTokens()
      .then(res => dispatch(globalActions.loadTokensSuccess(res)))
      .catch(err => dispatch(globalActions.loadTokensFailure(err)))
  }
}

function fetchBatches () {
  return (dispatch) => {
    dispatch(globalActions.loadBatches())

    return rollupApi.getBatches()
      .then(res => dispatch(globalActions.loadBatchesSuccess(res)))
      .catch(err => dispatch(globalActions.loadBatchesFailure(err)))
  }
}

export { fetchTokens, fetchBatches }
