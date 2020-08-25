import * as batchActions from './batch.actions'
import * as rollupApi from '../../apis/rollup'

function fetchBatch (batchId) {
  return (dispatch) => {
    dispatch(batchActions.loadBatch())

    return rollupApi.getBatch(batchId)
      .then(res => dispatch(batchActions.loadBatchSuccess(res)))
      .catch(err => dispatch(batchActions.loadBatchFailure(err)))
  }
}

function fetchBatchTransactions (batchId) {
  return (dispatch) => {
    dispatch(batchActions.loadBatchTransactions())

    return rollupApi.getBatchTransactions(batchId)
      .then((res) => {
        // Concatenating L1 and L2 transactions and sorting them by Position
        res = res.L1Txs.concat(res.L2Txs).sort((a, b) => b.Position - a.Position)
        dispatch(batchActions.loadBatchTransactionsSuccess(res))
      })
      .catch(err => dispatch(batchActions.loadBatchTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchBatchTransactions }
