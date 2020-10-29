import React from 'react'
import { Link } from 'react-router-dom'

import useSlotDetailsStyles from './slot-details.styles'

function SlotDetails ({ slot, bids }) {
  const classes = useSlotDetailsStyles()

  if (slot.closedAuction) {
    return (
      <div>
        <div className={classes.row}>
          <div className={classes.col}>
            Status
          </div>
          <div className={classes.col}>
            Closed Auction
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            Bids
          </div>
          <div className={classes.col}>
            {bids.length}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            Winner bid
          </div>
          <div className={classes.col}>
            {slot.winner.timeStamp}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            Coordinator
          </div>
          <div className={`${classes.col} ${classes.link}`}>
            <Link to={`/coordinator/${slot.winner.forgerAddr}`}>{slot.winner.forgerAddr}</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className={classes.row}>
          <div className={classes.col}>
            Status
          </div>
          <div className={classes.col}>
            Open Auction
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            Bids
          </div>
          <div className={classes.col}>
            {bids.length}
          </div>
        </div>
      </div>
    )
  }
}

export default SlotDetails
