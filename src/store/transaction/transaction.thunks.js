import * as transactionActionTypes from './transaction.actions'
import * as rollupApi from '../../apis/rollup'
import { HttpStatusCode } from '../../utils/http'

function fetchTransaction (transactionId) {
  return (dispatch) => {
    dispatch(transactionActionTypes.loadTransaction())

    return rollupApi.getPoolTransaction(transactionId)
      .then(res => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
      .catch(err => {
        if (err.response.status === HttpStatusCode.NOT_FOUND) {
          return rollupApi.getHistoryTransaction(transactionId)
            .then(res => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
            .catch(() => dispatch(transactionActionTypes.loadTransactionFailure()))
        } else {
          dispatch(transactionActionTypes.loadTransactionFailure())
        }
      })
  }
}

export { fetchTransaction }
