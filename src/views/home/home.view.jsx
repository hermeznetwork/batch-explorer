import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import useHomeStyles from './home.styles'
import Spinner from '../shared/spinner/spinner.view'
import BatchesList from '../shared/batches-list/batches-list.view'
import Overview from './components/overview/overview.view'
import { fetchBatches, fetchOverview } from '../../store/home/home.thunks'

function Home ({
  onLoadBatches,
  batchesTask,
  onLoadOverview,
  overviewTask
}) {
  React.useEffect(() => {
    onLoadBatches()
    onLoadOverview()
  }, [onLoadBatches, onLoadOverview])

  const classes = useHomeStyles()

  return (
    <div>
      {(() => {
        switch (overviewTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{overviewTask.error}</p>
          }
          case 'successful': {
            return (
              <>
                <section>
                  <h4 className={classes.title}>Overview</h4>
                  <Overview
                    overview={overviewTask.data}
                  />
                </section>
              </>
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
              <>
                <section>
                  <h4 className={classes.title}>Batches</h4>
                  <BatchesList
                    batches={batchesTask.data}
                  />
                </section>
              </>
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

Home.propTypes = {
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
  onLoadOverview: PropTypes.func.isRequired,
  overviewTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        LastBatch: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  batchesTask: state.home.batchesTask,
  overviewTask: state.home.overviewTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: () => dispatch(fetchBatches()),
  onLoadOverview: () => dispatch(fetchOverview())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
