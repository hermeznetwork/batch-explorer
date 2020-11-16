import * as transactionActionTypes from './transaction.actions'
import { CoordinatorAPI } from 'hermezjs'
import { HttpStatusCode } from 'hermezjs/src/http'

function fetchTransaction (transactionId) {
  return (dispatch) => {
    dispatch(transactionActionTypes.loadTransaction())

    return CoordinatorAPI.getPoolTransaction(transactionId)
      .then(res => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
      .catch(err => {
        if (err.response.status === HttpStatusCode.NOT_FOUND) {
          return CoordinatorAPI.getHistoryTransaction(transactionId)
            .then(res => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
            .catch(() => dispatch(transactionActionTypes.loadTransactionFailure()))
        } else {
          dispatch(transactionActionTypes.loadTransactionFailure())
        }
      })
  }
}

export { fetchTransaction }
