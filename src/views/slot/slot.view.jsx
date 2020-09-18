import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSlot } from '../../store/slot/slot.thunks'

function Slot ({
  onLoadSlot,
  slotTask
}) {
  const { slotNum } = useParams()

  React.useEffect(() => {
    onLoadSlot(slotNum)
  }, [slotNum, onLoadSlot])

  return (
    <div>SLOT</div>
  )
}

Slot.propTypes = {
  onLoadSlot: PropTypes.func.isRequired,
  slotTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        slotNum: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  slotTask: state.slot.slotTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadSlot: (slotNum) => dispatch(fetchSlot(slotNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slot)
