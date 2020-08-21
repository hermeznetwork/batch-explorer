import { batchActionTypes } from './batch.actions'

const initialBatchState = {
  batchTask: {
    status: 'pending'
  },
  batchTransactionsTask: {
    status: 'pending'
  }
}

function batchReducer (state = initialBatchState, action) {
  switch (action.type) {
    case batchActionTypes.LOAD_BATCH: {
      return {
        ...state,
        batchTask: {
          status: 'loading'
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_SUCCESS: {
      return {
        ...state,
        batchTask: {
          status: 'successful',
          data: action.batch
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_FAILURE: {
      return {
        ...state,
        batchTask: {
          status: 'failed',
          error: 'An error ocurred loading the batch'
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_TRANSACTIONS: {
      return {
        ...state,
        batchTransactionsTask: {
          status: 'loading'
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        batchTransactionsTask: {
          status: 'successful',
          data: action.transactions
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        batchTransactionsTask: {
          status: 'failed',
          error: 'An error ocurred loading the batch transactions'
        }
      }
    }
    default: {
      return state
    }
  }
}

export default batchReducer
