import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, batchForgerAddr, batchTimeStamp, hideForgerAddr }) {
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
      {
        hideForgerAddr
          ? <></>
          : <Link to={`/coordinator/${batchForgerAddr}`}>Coordinator: {batchForgerAddr}</Link>
      }
    </div>
  )
}

Batch.propTypes = {
  batchId: PropTypes.number.isRequired,
  batchTxNum: PropTypes.number.isRequired,
  batchForgerAddr: PropTypes.string,
  batchTimeStamp: PropTypes.number.isRequired,
  hideForgerAddr: PropTypes.bool
}

export default Batch
