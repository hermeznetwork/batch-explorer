import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchId, batchTxNum, batchForgerAddr, batchTimeStamp }) {
  const classes = useBatchStyles()

  const diff = new Date(new Date() - new Date(batchTimeStamp * 1000))
  const seconds = ('0' + diff.getSeconds()).substr(-2) + 's ago'
  const minutes = ('0' + diff.getMinutes()).substr(-2) + 'm '
  const hours = diff.getHours() + 'h '
  const days = diff.getDate() > 1 ? ' more than a day ago' : ''
  const formattedTime = !days ? hours + minutes + seconds : days

  return (
    <div className={classes.row}>
      <Link to={`/batch/${batchId}`}>
        Batch: {batchId}
      </Link>
      <div>
        {formattedTime}
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
