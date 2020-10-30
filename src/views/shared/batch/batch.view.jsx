import React from 'react'
import { Link } from 'react-router-dom'
import getTimeAgo from '../../../utils/time-converter'

import useBatchStyles from './batch.styles'

function Batch ({ batch }) {
  const classes = useBatchStyles()

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Batch
        </div>
        <div className={classes.col}>
          Age
        </div>
        <div className={classes.col}>
          Transactions
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.link}`}>
          <Link to={`/batch/${batch.batchNum}`}>{batch.batchNum}</Link>
        </div>
        <div className={classes.col}>
          {getTimeAgo(batch.timestamp)}
        </div>
        <div className={classes.col}>
          {batch.forgeL1TransactionsNum}
        </div>
      </div>
    </section>
  )
}

export default Batch
