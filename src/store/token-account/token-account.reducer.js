import { tokenAccountActionTypes } from './token-account.actions'
import { getPaginationData } from '../../utils/api'

const initialTokenAccountState = {
  accountTask: {
    status: 'pending'
  },
  transactionsTask: {
    status: 'pending'
  }
}

function tokenAccountReducer (state = initialTokenAccountState, action) {
  switch (action.type) {
    case tokenAccountActionTypes.LOAD_ACCOUNT: {
      return {
        ...state,
        accountTask: {
          status: 'loading'
        }
      }
    }
    case tokenAccountActionTypes.LOAD_ACCOUNT_SUCCESS: {
      return {
        ...state,
        accountTask: {
          status: 'successful',
          data: action.account
        }
      }
    }
    case tokenAccountActionTypes.LOAD_ACCOUNT_FAILURE: {
      return {
        ...state,
        accountTask: {
          status: 'failed',
          error: 'Account does not exist or cannot be loaded.'
        }
      }
    }
    case tokenAccountActionTypes.LOAD_TRANSACTIONS: {
      return {
        ...state,
        transactionsTask: state.transactionsTask.status === 'successful'
          ? { status: 'reloading', data: state.transactionsTask.data }
          : { status: 'loading' }
      }
    }
    case tokenAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS: {
      const transactions = state.transactionsTask.status === 'reloading'
        ? [...state.transactionsTask.data.transactions, ...action.data.transactions]
        : action.data.transactions
      const pagination = getPaginationData(action.data.pendingItems, transactions)

      return {
        ...state,
        transactionsTask: {
          status: 'successful',
          data: { transactions, pagination }
        }
      }
    }
    case tokenAccountActionTypes.LOAD_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        transactionsTask: {
          status: 'failed',
          error: 'Transactions do not exist or cannot be loaded.'
        }
      }
    }
    case tokenAccountActionTypes.RESET_STATE: {
      return initialTokenAccountState
    }
    default: {
      return state
    }
  }
}

export default tokenAccountReducer
