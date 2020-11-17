import { batchActionTypes } from './batch.actions'
import { getPaginationData } from '../../utils/api'

const initialBatchState = {
  batchTask: {
    status: 'pending'
  },
  transactionsTask: {
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
        transactionsTask: state.transactionsTask.status === 'successful'
          ? { status: 'reloading', data: state.transactionsTask.data }
          : { status: 'loading' }
      }
    }
    case batchActionTypes.LOAD_BATCH_TRANSACTIONS_SUCCESS: {
      const transactions = state.transactionsTask.status === 'reloading'
        ? [...state.transactionsTask.data.transactions, ...action.data.transactions]
        : action.data.transactions
      const pagination = getPaginationData(action.data.pendingItems)

      return {
        ...state,
        transactionsTask: {
          status: 'successful',
          data: { transactions, pagination }
        }
      }
    }
    case batchActionTypes.LOAD_BATCH_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        transactionsTask: {
          status: 'failed',
          error: 'An error ocurred loading the batch transactions'
        }
      }
    }
    case batchActionTypes.RESET_STATE: {
      return initialBatchState
    }
    default: {
      return state
    }
  }
}

export default batchReducer
