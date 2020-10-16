import React from 'react'
import { Link } from 'react-router-dom'

import useBatchDetailsStyles from './batch-details.styles'
import angleDown from '../../../../images/icons/angle-down.svg'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Hash</div>
        <div className={classes.col}>{batch.ethereumBlockHash}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Number</div>
        <div className={classes.col}>{batch.ethereumBlockNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Status</div>
        <div className={`${classes.col} ${classes.status}`}>TODO</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Timestamp</div>
        <div className={classes.col}>{batch.timestamp}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Fees Collected</div>
        <div className={classes.col}>{batch.historicTotalCollectedFeesUSD} USD</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Coordinator</div>
        <div className={`${classes.col} ${classes.link}`}><Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link></div>
      </div>
      {/* TODO Add see details functionality */}
      <button
        className={classes.seeDetails}
      >
        See details
        <img src={angleDown} className={classes.icon} alt='See details' />
      </button>
      <div className={classes.row}>
        <div className={classes.col}>Number of txs</div>
        <div className={classes.col}>{batch.forgeL1TransactionsNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Slot</div>
        <div className={`${classes.col} ${classes.link}`}><Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link></div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>State root</div>
        <div className={classes.col}>{batch.stateRoot}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Exit root</div>
        <div className={classes.col}>{batch.exitRoot}</div>
      </div>
    </div>
  )
}

export default BatchDetails
