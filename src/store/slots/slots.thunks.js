import * as slotsActions from './slots.actions'
import * as rollupApi from '../../apis/rollup'

function fetchSlots (slotNum) {
  return (dispatch) => {
    dispatch(slotsActions.loadSlots())

    return rollupApi.getSlots(slotNum)
      .then(res => dispatch(slotsActions.loadSlotsSuccess(res.nextForgers)))
      .catch(err => dispatch(slotsActions.loadSlotsFailure(err)))
  }
}

export { fetchSlots }
