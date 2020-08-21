import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import useBatchStyles from './batch.styles'
import Spinner from '../shared/spinner/spinner.view'
import BatchDetails from './components/batch-details/batch-details.view'
// import BatchTransactionsList from './components/batch-transactions-list/batch-transactions-list.view'
import { fetchBatch } from '../../store/batch/batch.thunks'

function Batch ({
  onLoadBatches,
  batchTask
//  batchTransactionsList
}) {
  React.useEffect(() => {
    onLoadBatches()
  }, [onLoadBatches])

  const classes = useBatchStyles()

  return (
    <div>
      {(() => {
        switch (batchTask.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{batchTask.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <h4 className={classes.title}>Batch</h4>
                <BatchDetails
                  batch={batchTask.data}
                />
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()}

      {/* {(() => {
        switch (batchTransactionsList.status) {
          case 'loading': {
            return <Spinner />
          }
          case 'failed': {
            return <p>{batchTransactionsList.error}</p>
          }
          case 'successful': {
            return (
              <section>
                <h4 className={classes.title}>Batch transactions</h4>
                <BatchTransactionsList
                  batchTransactionsList={batchTransactionsList.data}
                />
              </section>
            )
          }
          default: {
            return <></>
          }
        }
      })()} */}
    </div>
  )
}

Batch.propTypes = {
  onLoadBatches: PropTypes.func.isRequired,
  batchTask: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        BatchID: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.string
  })
//   batchTransactionsList: PropTypes.shape({
//     status: PropTypes.string.isRequired,
//     data: PropTypes.arrayOf(
//       PropTypes.shape({
//         TxID: PropTypes.number.isRequired
//       })
//     ),
//     error: PropTypes.string
//   })
}

const mapStateToProps = (state) => ({
  batchTask: state.batch.batchTask
//  batchTransactionsList: state.batch.batchTransactionsList
})

const mapDispatchToProps = (dispatch) => ({
  onLoadBatches: () => dispatch(fetchBatch(222))
})

export default connect(mapStateToProps, mapDispatchToProps)(Batch)
