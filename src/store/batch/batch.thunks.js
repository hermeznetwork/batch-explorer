import * as batchActions from './batch.actions'
import * as rollupApi from '../../apis/rollup'

function fetchBatch (batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatch())

    return rollupApi.getBatch(batchNum)
      .then(res => dispatch(batchActions.loadBatchSuccess(res)))
      .catch(err => dispatch(batchActions.loadBatchFailure(err)))
  }
}

function fetchBatchTransactions (batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatchTransactions())

    return rollupApi.getBatchTransactions(batchNum)
      .then(res => dispatch(batchActions.loadBatchTransactionsSuccess(res)))
      .catch(err => dispatch(batchActions.loadBatchTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchBatchTransactions }
