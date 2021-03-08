import { tokensActionTypes } from './tokens.actions'
import { getPaginationData } from '../../utils/api'

const initialTokensState = {
  tokensTask: {
    status: 'pending'
  }
}

function tokensReducer (state = initialTokensState, action) {
  switch (action.type) {
    case tokensActionTypes.LOAD_TOKENS: {
      return {
        ...state,
        tokensTask: state.tokensTask.status === 'successful'
          ? { status: 'reloading', data: state.tokensTask.data }
          : { status: 'loading' }
      }
    }
    case tokensActionTypes.LOAD_TOKENS_SUCCESS: {
      const tokens = state.tokensTask.status === 'reloading'
        ? [...state.tokensTask.data.tokens, ...action.data.tokens]
        : action.data.tokens
      const pagination = getPaginationData(action.data.pendingItems, tokens)

      return {
        ...state,
        tokensTask: {
          status: 'successful',
          data: { tokens, pagination }
        }
      }
    }
    case tokensActionTypes.LOAD_TOKENS_FAILURE: {
      return {
        ...state,
        tokensTask: {
          status: 'failed',
          error: 'An error ocurred. Tokens do not exist or cannot be loaded.'
        }
      }
    }
    case tokensActionTypes.RESET_STATE: {
      return initialTokensState
    }
    default: {
      return state
    }
  }
}

export default tokensReducer
