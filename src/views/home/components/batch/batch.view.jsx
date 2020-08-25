import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, batchForgerAddr, batchTimeStamp }) {
  const classes = useBatchStyles()

  return (
    <div className={classes.row}>
      <Link to={`/batch/${batchId}`}>
        Batch: {batchId}
      </Link>
      <div>
        Age: {batchTimeStamp}
      </div>
      <div>
        Txs: {batchTxNum}
      </div>
      <Link to={`/coordinator/${batchForgerAddr}`}>
        Coordinator: {batchForgerAddr}
      </Link>
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
