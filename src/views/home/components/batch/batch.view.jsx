import React from 'react'
import { Link } from 'react-router-dom'
import getPartiallyHiddenAddress from '../../../../utils/address-shortener'

import useBatchStyles from './batch.styles'

function Batch ({ batchNum, batchTxNum, batchForgerAddr, batchTimeStamp }) {
  const classes = useBatchStyles()

  const diff = new Date(new Date() - new Date(batchTimeStamp * 1000))
  const seconds = ('0' + diff.getSeconds()).substr(-2) + 's ago'
  const minutes = ('0' + diff.getMinutes()).substr(-2) + 'm '
  const hours = diff.getHours() + 'h '
  const days = diff.getDate() > 1 ? ' more than a day ago' : ''
  const formattedTime = !days ? hours + minutes + seconds : days

  return (
    <div className={classes.col}>
      <div className={classes.batchWrapper}>
        <Link to={`/batch/${batchNum}`}>
          <div className={classes.batch}>Batch: {batchNum}</div>
        </Link>
      </div>
      <div className={classes.transaction}>
        Transactions: <span className={classes.transactionNumber}>{batchTxNum}</span>
      </div>
      <div className={classes.coordinator}>
        Coordinator:
        <span className={classes.coordinatorLink}>
          <Link to={`/coordinator/${batchForgerAddr}`}>{getPartiallyHiddenAddress(batchForgerAddr)}</Link>
        </span>
      </div>
      <div className={classes.time}>
        {formattedTime}
      </div>
    </div>
  )
}

export default Batch
