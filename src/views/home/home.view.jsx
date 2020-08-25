import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import useHomeStyles from './home.styles'
import Spinner from '../shared/spinner/spinner.view'
import BatchesList from './components/batches-list/batches-list.view'
import { fetchBatches } from '../../store/home/home.thunks'

function Home ({
  onLoadBatches,
  batchesTask
}) {
  React.useEffect(() => {
    onLoadBatches()
  }, [onLoadBatches])

  const classes = useHomeStyles()

  return (
    <div>
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
  })
}

const mapStateToProps = (state) => ({
  batchesTask: state.home.batchesTask
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: () => dispatch(fetchBatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
