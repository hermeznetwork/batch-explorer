import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, batchForgerAddr, batchTimeStamp, hideForgerAddr }) {
  const classes = useBatchStyles()

  function hideForgerAddress (hideForgerAddr) {
    if (hideForgerAddr) {
      return <></>
    } else {
      return <Link to={`/coordinator/${batchForgerAddr}`}>Coordinator: {batchForgerAddr}</Link>
    }
  }

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
      {hideForgerAddress(hideForgerAddr)}
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
