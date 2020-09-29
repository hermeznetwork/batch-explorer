import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useSlotStyles from './slot.styles'
import Spinner from '../shared/spinner/spinner.view'
import SlotDetails from './components/slot-details/slot-details.view'
import BidsList from '../shared/bids-list/bids-list.view'
// import BatchesList from '../shared/batches-list/batches-list.view'
import { fetchSlot, fetchBids } from '../../store/slot/slot.thunks'
// TODO add fetchBatches & co.

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
            switch (bidsTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{bidsTask.error}</p>
              }
              case 'successful': {
                let batchesInSlotSection
                if (slotTask.data.closedAuction) {
                  batchesInSlotSection =
                  // TODO OVO MOZE DA BUDE ISTO KAO I COORDINATOR, PROVERI da li je isti i poziv ka API-u
                    <section>
                      <h4 className={classes.title}>Batches in Slot</h4>
                      {/* <BatchesList
                        batches={batchesTask.data.batches}
                        hideForgerAddr
                      /> */}
                    </section>
                }
                return (
                  <>
                    <section>
                      <h4 className={classes.title}>Slot</h4>
                      <SlotDetails
                        slot={slotTask.data}
                        bids={bidsTask.data.bids}
                      />
                    </section>
                    <section>
                      <h4 className={classes.title}>Bids</h4>
                      <BidsList
                        bids={bidsTask.data.bids}
                      />
                    </section>
                    {batchesInSlotSection}
                  </>
                )
              }
              default: {
                return <></>
              }
            }
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
  onLoadBids: (slotNum) => dispatch(fetchBids(slotNum, undefined))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slot)
