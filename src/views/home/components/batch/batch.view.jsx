import React from 'react'
import { Link } from 'react-router-dom'
import getPartiallyHiddenAddress from '../../../../utils/address-shortener'
import getTimeAgo from '../../../../utils/time-converter'

import useBatchStyles from './batch.styles'

function Batch ({ batch }) {
  const classes = useBatchStyles()

  return (
    <div className={classes.col}>
      <div className={classes.batchWrapper}>
        <Link to={`/batch/${batch.batchNum}`}>
          <div className={classes.batch}>{batch.batchNum}</div>
        </Link>
      </div>
      {batch.forgedTransactions
        ? (
          <div className={classes.transaction}>
          Transactions: <span className={classes.transactionNumber}>{batch.forgedTransactions}</span>
          </div>
        ) : <></>}
      <div className={classes.coordinator}>
        Coordinator:
        <span className={classes.coordinatorLink}>
          <Link to={`/coordinator/${batch.forgerAddr}`}>{getPartiallyHiddenAddress(batch.forgerAddr)}</Link>
        </span>
      </div>
      <div className={classes.time}>
        {getTimeAgo(batch.timestamp)}
      </div>
    </div>
  )
}

export default Batch
