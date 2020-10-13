import React from 'react'

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
            {overview.lastBatch}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            TODO
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg transactions per batch:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.transactionsPerBatch}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            TODO
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg Batch Time:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.batchFrequency}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
           TODO
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Transactions Per Second:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.transactionsPerSecond}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            TODO
          </div>
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Total Wallets:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.totalBJJs}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            {overview.totalAccounts} accounts
          </div>
        </div>
        <div className={classes.col}>
          <div className={`${classes.row} ${classes.firstRow}`}>
            Avg transaction fee:
          </div>
          <div className={`${classes.row} ${classes.secondRow}`}>
            {overview.avgTransactionFee}
          </div>
          <div className={`${classes.row} ${classes.thirdRow}`}>
            TODO
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
