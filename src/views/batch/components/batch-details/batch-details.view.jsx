import React from 'react'
import { Link } from 'react-router-dom'

import useBatchDetailsStyles from './batch-details.styles'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div>
      <div className={`${classes.row} ${classes.rowFirst}`}>
        <div className={classes.col}>Eth Block Hash</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.ethereumBlockHash}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Number</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.ethereumBlockNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Status</div>
        <div className={`${classes.col} ${classes.colLast}`}>TODO</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Timestamp</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.timestamp}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Fees Collected</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.historicTotalCollectedFeesUSD} USD</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Coordinator</div>
        <div className={`${classes.col} ${classes.colLast} ${classes.link}`}><Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link></div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Number of txs</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.forgeL1TransactionsNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Slot</div>
        <div className={`${classes.col} ${classes.colLast} ${classes.link}`}><Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link></div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>State root</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.stateRoot}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Exit root</div>
        <div className={`${classes.col} ${classes.colLast}`}>{batch.exitRoot}</div>
      </div>
    </div>
  )
}

export default BatchDetails
