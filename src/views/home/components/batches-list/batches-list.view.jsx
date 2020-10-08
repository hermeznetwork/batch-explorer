import React from 'react'
import PropTypes from 'prop-types'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches }) {
  const classes = useBatchesListStyles()

  return (
    <section className={classes.row}>
      {batches.map((batch, index) =>
        <Batch
          batchNum={batch.batchNum}
          batchTxNum={batch.forgeL1TransactionsNum}
          batchForgerAddr={batch.forgerAddr}
          batchTimeStamp={batch.timeStamp}
          key={batch.batchNum}
        />
      )}
    </section>
  )
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNum: PropTypes.number.isRequired
    })
  ),
  hideForgerAddr: PropTypes.bool
}

export default BatchesList
