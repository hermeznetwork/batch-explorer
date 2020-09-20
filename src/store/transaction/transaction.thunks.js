import * as transactionActionTypes from './transaction.actions'
import * as rollupApi from '../../apis/rollup'

function fetchTransaction () {
  return (dispatch) => {
    dispatch(transactionActionTypes.loadTransaction())

    return rollupApi.getTransaction()
      .then(res => dispatch(transactionActionTypes.loadTransactionSuccess(res)))
      .catch(err => dispatch(transactionActionTypes.loadTransactionFailure(err)))
  }
}

export { fetchTransaction }
