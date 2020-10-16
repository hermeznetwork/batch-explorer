import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useSlotStyles from './slot.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import SlotDetails from './components/slot-details/slot-details.view'
import BidsList from '../shared/bids-list/bids-list.view'
import BatchesList from '../shared/batches-list/batches-list.view'
import { fetchSlot, fetchBids, fetchBatches } from '../../store/slot/slot.thunks'

function Slot ({
  onLoadSlot,
  slotTask,
  onLoadBids,
  bidsTask,
  onLoadBatches,
  batchesTask
}) {
  const classes = useSlotStyles()
  const { slotNum } = useParams()

  React.useEffect(() => {
    onLoadSlot(slotNum)
    onLoadBids(slotNum)
  }, [slotNum, onLoadSlot, onLoadBids])

  React.useEffect(() => {
    if (slotTask.status === 'successful') {
      const minBatchNum = slotTask.data.batchNums[0]
      const maxBatchNum = slotTask.data.batchNums[slotTask.data.batchNums.length - 1]

      onLoadBatches(minBatchNum, maxBatchNum)
    }
  }, [slotTask, onLoadBatches])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
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
                            isSlot
                          />
                        </section>
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

          {(() => {
            switch (batchesTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{batchesTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={classes.title}>Batches in slot</h4>
                    <BatchesList
                      batches={batchesTask.data.batches}
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
      </Container>
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
  }),
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        batchNum: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  slotTask: state.slot.slotTask,
  bidsTask: state.slot.bidsTask,
  batchesTask: state.slot.batchesTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadSlot: (slotNum) => dispatch(fetchSlot(slotNum)),
  onLoadBids: (slotNum) => dispatch(fetchBids(slotNum, undefined)),
  onLoadBatches: (minBatchNum, maxBatchNum) => dispatch(fetchBatches(undefined, minBatchNum, maxBatchNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(Slot)
