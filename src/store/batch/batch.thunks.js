import * as batchActions from './batch.actions'
import { CoordinatorAPI } from '@hermeznetwork/hermezjs'

/**
 * Fetches the batch details for the specified batch number
 * @param {string} batchNum - Batch number
 * @returns {void}
 */
function fetchBatch (batchNum) {
  return (dispatch) => {
    dispatch(batchActions.loadBatch())

    return CoordinatorAPI.getBatch(batchNum)
      .then(res => dispatch(batchActions.loadBatchSuccess(res)))
      .catch(err => dispatch(batchActions.loadBatchFailure(err)))
  }
}

/**
 * Fetches the transactions details for the specified batch number
 * @param {string} batchNum - Batch number
 * @returns {void}
 */
function fetchTransactions (batchNum, fromItem) {
  return (dispatch) => {
    dispatch(batchActions.loadTransactions())

    return CoordinatorAPI.getTransactions(undefined, undefined, batchNum, undefined, fromItem)
      .then(res => {
        if (res.transactions.length > 0) {
          dispatch(batchActions.loadTransactionsSuccess(res))
        } else {
          dispatch(batchActions.loadTransactionsFailure('There are no transactions for this batch.'))
        }
      })
      .catch(err => dispatch(batchActions.loadTransactionsFailure(err)))
  }
}

export { fetchBatch, fetchTransactions }
