import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import useCoordinatorStyles from './coordinator.styles'
import Spinner from '../shared/spinner/spinner.view'
import CoordinatorDetails from './components/coordinator-details/coordinator-details.view'
import BatchesList from '../home/components/batches-list/batches-list.view'
import { fetchBatches, fetchCoordinator } from '../../store/coordinator/coordinator.thunks'

function Coordinator ({
  onLoadBatches,
  batchesTask,
  onLoadCoordinator,
  coordinatorTask
}) {
  const classes = useCoordinatorStyles()
  const { coordinatorId } = useParams()

  React.useEffect(() => {
    onLoadBatches(coordinatorId)
    onLoadCoordinator(coordinatorId)
  }, [coordinatorId, onLoadBatches, onLoadCoordinator])

  return (
    <div>
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
                <h4 className={classes.title}>Coordinator</h4>
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
                  batches={batchesTask.data}
                  hideForgerAddr
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

Coordinator.propTypes = {
  onLoadBatches: PropTypes.func.isRequired,
  batchesTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        BatchID: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  }),
  hideForgerAddr: PropTypes.bool,
  onLoadCoordinator: PropTypes.func.isRequired,
  coordinatorTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        Forger: PropTypes.string.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  batchesTask: state.coordinator.batchesTask,
  coordinatorTask: state.coordinator.coordinatorTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: (coordinatorId) => dispatch(fetchBatches(coordinatorId)),
  onLoadCoordinator: (coordinatorId) => dispatch(fetchCoordinator(coordinatorId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Coordinator)
