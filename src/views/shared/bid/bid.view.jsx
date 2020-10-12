import React from 'react'
import { Link } from 'react-router-dom'

function Bid ({ forgerAddr, bidValue, numberOfBids, slotNum, isSlot }) {
  if (isSlot) {
    return (
      <div>
        <div>
          Coordinator:  <Link to={`/coordinator/${forgerAddr}`}>{forgerAddr}</Link>
        </div>
        <div>
          Bid amount: {bidValue}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          Slot: <Link to={`/slot/${slotNum}`}>{slotNum}</Link>
        </div>
        <div>
          Bids: {numberOfBids}
        </div>
        <div>
          Bid amount: {bidValue}
        </div>
      </div>
    )
  }
}

export default Bid
