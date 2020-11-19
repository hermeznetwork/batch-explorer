import React from 'react'
import getTimeAgo from '../../../../utils/time-converter'

import useOverviewStyles from './overview.styles'

function Overview ({ overview }) {
  const classes = useOverviewStyles()

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Last batch:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.network.lastBatch.batchNum}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            {getTimeAgo(overview.network.lastBatch.timestamp)}
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg txs per batch:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.metrics.transactionsPerBatch}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            Last 24 hrs
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg Batch Time:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.metrics.batchFrequency}"
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            Last 24 hrs
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Txs Per Second:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.metrics.transactionsPerSecond}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            Last 24 hrs
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Total Wallets:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.metrics.totalBJJs}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            {overview.metrics.totalAccounts} accounts
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg tx fee:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            &#36;{overview.metrics.avgTransactionFee}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            Last 24 hrs
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
