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
      .then((res) => {
        // Concatenating L1 and L2 transactions and sorting them by Position
        res = res.L1Txs.concat(res.L2Txs).sort((a, b) => b.Position - a.Position)
        dispatch(batchActions.loadBatchTransactionsSuccess(res))
      })
      .catch(err => dispatch(batchActions.loadBatchTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchBatchTransactions }
