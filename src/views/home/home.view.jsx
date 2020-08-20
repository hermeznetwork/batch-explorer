import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import useHomeStyles from './home.styles'
import Spinner from '../shared/spinner/spinner.view'
import BatchesList from './components/batches-list/batches-list.view'

function Home ({
  batchesTask
}) {
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
  batchesTask: state.global.batchesTask
})

export default connect(mapStateToProps)(Home)
