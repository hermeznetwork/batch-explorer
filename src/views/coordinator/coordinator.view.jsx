import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useCoordinatorStyles from './coordinator.styles'
import Spinner from '../shared/spinner/spinner.view'
import Container from '../shared/container/container.view'
import CoordinatorDetails from './components/coordinator-details/coordinator-details.view'
import BatchesList from '../shared/batches-list/batches-list.view'
import BidsList from '../shared/bids-list/bids-list.view'
import { fetchBatches, fetchCoordinator, fetchBids } from '../../store/coordinator/coordinator.thunks'

function Coordinator ({
  onLoadBatches,
  batchesTask,
  onLoadCoordinator,
  coordinatorTask,
  onLoadBids,
  bidsTask
}) {
  const classes = useCoordinatorStyles()
  const { coordinatorId } = useParams()

  React.useEffect(() => {
    onLoadBatches(coordinatorId)
    onLoadCoordinator(coordinatorId)
    onLoadBids(coordinatorId)
  }, [coordinatorId, onLoadBatches, onLoadCoordinator, onLoadBids])

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          {(() => {
            switch (coordinatorTask.status) {
              case 'loading': {
                return <Spinner />
              }
              case 'failed': {
                return <p>{coordinatorTask.error}</p>
              }
              case 'successful': {
                return (
                  <section>
                    <h4 className={classes.title}>Coordinator info</h4>
                    <CoordinatorDetails
                      coordinator={coordinatorTask.data}
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
                    <h4 className={classes.title}>Forged batches</h4>
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
                    <h4 className={classes.title}>Winner bids</h4>
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
      </Container>
    </div>
  )
}

Coordinator.propTypes = {
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.object.isRequired,
  onLoadCoordinator: PropTypes.func.isRequired,
  coordinatorTask: PropTypes.object.isRequired,
  onLoadBids: PropTypes.func.isRequired,
  bidsTask: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  batchesTask: state.coordinator.batchesTask,
  coordinatorTask: state.coordinator.coordinatorTask,
  bidsTask: state.coordinator.bidsTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: (coordinatorId) => dispatch(fetchBatches(coordinatorId)),
  onLoadCoordinator: (coordinatorId) => dispatch(fetchCoordinator(coordinatorId)),
  onLoadBids: (coordinatorId) => dispatch(fetchBids(undefined, coordinatorId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Coordinator)
