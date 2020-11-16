import * as globalActions from './global.actions'
import { CoordinatorAPI } from 'hermezjs'

function fetchTokens () {
  return (dispatch) => {
    dispatch(globalActions.loadTokens())

    return CoordinatorAPI.getTokens()
      .then(res => dispatch(globalActions.loadTokensSuccess(res)))
      .catch(err => dispatch(globalActions.loadTokensFailure(err)))
  }
}

export { fetchTokens }
