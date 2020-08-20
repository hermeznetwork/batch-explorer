import React from 'react'
import PropTypes from 'prop-types'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, batchForgerAddr, batchTimeStamp }) {
  const classes = useBatchStyles()

  return (
    <div className={classes.row}>
      <div>
            Batch: {batchId}
      </div>
      <div>
            Age: {batchTimeStamp}
      </div>
      <div>
            Txs: {batchTxNum}
      </div>
      <div>
            Coordinator: {batchForgerAddr}
      </div>
    </div>
  )
}

Batch.propTypes = {
  batchId: PropTypes.number.isRequired,
  batchTxNum: PropTypes.number.isRequired,
  batchForgerAddr: PropTypes.string.isRequired,
  batchTimeStamp: PropTypes.number.isRequired
}

export default Batch
