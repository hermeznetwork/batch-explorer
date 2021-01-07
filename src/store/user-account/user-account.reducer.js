import { userAccountActionTypes } from './user-account.actions'
import { getPaginationData } from '../../utils/api'

const initialUserAccountState = {
  accountsTask: {
    status: 'pending'
  },
  transactionsTask: {
    status: 'pending'
  }
}

function userAccountReducer (state = initialUserAccountState, action) {
  switch (action.type) {
    case userAccountActionTypes.LOAD_ACCOUNT: {
      return {
        ...state,
        accountsTask: state.accountsTask.status === 'pending'
          ? { status: 'loading' }
          : { status: 'reloading', data: state.accountsTask.data }
      }
    }
    case userAccountActionTypes.LOAD_ACCOUNT_SUCCESS: {
      const accounts = state.accountsTask.status === 'reloading'
        ? [...state.accountsTask.data.accounts, ...action.data.accounts]
        : action.data.accounts
      const pagination = getPaginationData(action.data.pendingItems, accounts)

      return {
        ...state,
        accountsTask: {
          status: 'successful',
          data: { accounts, pagination }
        }
      }
    }
    case userAccountActionTypes.LOAD_ACCOUNT_FAILURE: {
      return {
        ...state,
        accountsTask: {
          status: 'failed',
          error: 'An error ocurred loading the account'
        }
      }
    }
    case userAccountActionTypes.LOAD_TRANSACTIONS: {
      return {
        ...state,
        transactionsTask: state.transactionsTask.status === 'successful'
          ? { status: 'reloading', data: state.transactionsTask.data }
          : { status: 'loading' }
      }
    }
    case userAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS: {
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
    case userAccountActionTypes.LOAD_TRANSACTIONS_FAILURE: {
      return {
        ...state,
        transactionsTask: {
          status: 'failed',
          error: 'An error ocurred loading the transactions'
        }
      }
    }
    case userAccountActionTypes.RESET_STATE: {
      return initialUserAccountState
    }
    default: {
      return state
    }
  }
}

export default userAccountReducer
