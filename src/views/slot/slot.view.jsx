import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useSlotStyles from './slot.styles'
import Spinner from '../shared/spinner/spinner.view'
import SlotDetails from './components/slot-details/slot-details.view'
import BidsList from './components/bids-list/bids-list.view'
import { fetchSlot, fetchBids } from '../../store/slot/slot.thunks'

function Slot ({
  onLoadSlot,
  slotTask,
  onLoadBids,
  bidsTask
}) {
  const classes = useSlotStyles()
  const { slotNum } = useParams()

  React.useEffect(() => {
    onLoadSlot(slotNum)
    onLoadBids(slotNum)
  }, [slotNum, onLoadSlot, onLoadBids])

  return (
    <div>
      {(() => {
        switch (slotTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{slotTask.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <h4 className={classes.title}>Slot</h4>
                <SlotDetails
                  slot={slotTask.data}
                />
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()}
      {(() => {
        switch (bidsTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{bidsTask.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <h4 className={classes.title}>Bids</h4>
                <BidsList
                  bids={bidsTask.data.bids}
                />
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()}
    </div>
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
  }),
  onLoadBids: PropTypes.func.isRequired,
  bidsTask: PropTypes.shape({
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
  slotTask: state.slot.slotTask,
  bidsTask: state.slot.bidsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadSlot: (slotNum) => dispatch(fetchSlot(slotNum)),
  onLoadBids: (slotNum) => dispatch(fetchBids(slotNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slot)
