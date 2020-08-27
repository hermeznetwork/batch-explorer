import { userAccountActionTypes } from './user-account.actions'

const initialUserAccountReducer = {
  accountTask: {
    status: 'pending'
  },
  transactionsTask: {
    status: 'pending'
  }
}

function userAccountReducer (state = initialUserAccountReducer, action) {
  switch (action.type) {
    case userAccountActionTypes.LOAD_ACCOUNT: {
      return {
        ...state,
        accountTask: {
          status: 'loading'
        }
      }
    }
    case userAccountActionTypes.LOAD_ACCOUNT_SUCCESS: {
      return {
        ...state,
        accountTask: {
          status: 'successful',
          data: action.account
        }
      }
    }
    case userAccountActionTypes.LOAD_ACCOUNT_FAILURE: {
      return {
        ...state,
        accountTask: {
          status: 'failed',
          error: 'An error ocurred loading the account'
        }
      }
    }
    case userAccountActionTypes.LOAD_TRANSACTIONS: {
      return {
        ...state,
        transactionsTask: {
          status: 'loading'
        }
      }
    }
    case userAccountActionTypes.LOAD_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transactionsTask: {
          status: 'successful',
          data: action.transactions
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
    default: {
      return state
    }
  }
}

export default userAccountReducer
