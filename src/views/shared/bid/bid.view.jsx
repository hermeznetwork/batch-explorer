import React from 'react'
import { Link } from 'react-router-dom'

import useBidStyles from './bid.styles'

function Bid ({ forgerAddr, bidValue, numberOfBids, slotNum, isSlot }) {
  const classes = useBidStyles()

  if (isSlot) {
    return (
      <section>
        <div className={classes.row}>
          <div className={classes.col}>
          Coordinator
          </div>
          <div className={classes.col}>
          Bid amount
          </div>
        </div>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.link}`}>
            <Link to={`/coordinator/${forgerAddr}`}>{forgerAddr}</Link>
          </div>
          <div className={classes.col}>
            {bidValue}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <div className={classes.row}>
          <div className={classes.col}>
            Slot
          </div>
          <div className={classes.col}>
            Bids
          </div>
          <div className={classes.col}>
            Bid amount
          </div>
        </div>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.link}`}>
            <Link to={`/slot/${slotNum}`}>{slotNum}</Link>
          </div>
          <div className={classes.col}>
            {numberOfBids}
          </div>
          <div className={classes.col}>
            {bidValue}
          </div>
        </div>
      </section>
    )
  }
}

export default Bid
