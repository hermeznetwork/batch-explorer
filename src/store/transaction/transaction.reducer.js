import { transactionActionTypes } from './transaction.actions'

const initialTransactionReducer = {
  transactionTask: {
    status: 'pending'
  }
}

function transactionReducer (state = initialTransactionReducer, action) {
  switch (action.type) {
    case transactionActionTypes.LOAD_TRANSACTION: {
      return {
        ...state,
        transactionTask: {
          status: 'loading'
        }
      }
    }
    case transactionActionTypes.LOAD_TRANSACTION_SUCCESS: {
      return {
        ...state,
        transactionTask: {
          status: 'successful',
          data: action.transaction
        }
      }
    }
    case transactionActionTypes.LOAD_TRANSACTION_FAILURE: {
      return {
        ...state,
        transactionTask: {
          status: 'failed',
          error: 'An error ocurred loading the transaction'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default transactionReducer
