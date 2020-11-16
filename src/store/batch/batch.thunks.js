import * as batchActions from './batch.actions'
import { CoordinatorAPI } from 'hermezjs'

function fetchBatch (batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatch())

    return CoordinatorAPI.getBatch(batchNum)
      .then(res => dispatch(batchActions.loadBatchSuccess(res)))
      .catch(err => dispatch(batchActions.loadBatchFailure(err)))
  }
}

function fetchBatchTransactions (batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatchTransactions())

    return CoordinatorAPI.getTransactions(undefined, undefined, batchNum)
      .then((res) => { dispatch(batchActions.loadBatchTransactionsSuccess(res)) })
      .catch(err => dispatch(batchActions.loadBatchTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchBatchTransactions }
