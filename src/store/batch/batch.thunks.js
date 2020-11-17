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

function fetchTransactions (batchNum, fromItem) {
  return (dispatch) => {
    dispatch(batchActions.loadTransactions())

    return CoordinatorAPI.getTransactions(undefined, undefined, batchNum, undefined, fromItem)
      .then(res => dispatch(batchActions.loadTransactionsSuccess(res)))
      .catch(err => dispatch(batchActions.loadTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchTransactions }
