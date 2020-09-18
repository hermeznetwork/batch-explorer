import * as slotActions from './slot.actions'
import * as rollupApi from '../../apis/rollup'

function fetchSlot (slotNum) {
  return (dispatch) => {
    dispatch(slotActions.loadSlot())

    return rollupApi.getSlot(slotNum)
      .then(res => dispatch(slotActions.loadSlotSuccess(res)))
      .catch(err => dispatch(slotActions.loadSlotFailure(err)))
  }
}

export { fetchSlot }
