import React from 'react'
import { Link } from 'react-router-dom'

function SlotDetails ({ slot, bids }) {
  if (slot.closedAuction) {
    return (
      <div>
        <div>
          Slot: {slot.slotNum}
        </div>
        <div>
          Status: Closed Auction
        </div>
        <div>
          Bids: {bids.length}
        </div>
        <div>
          Winner bid: TODO
        </div>
        <div>
          Coordinator:  <Link to={`/coordinator/${slot.winner.forgerAddr}`}>{slot.winner.forgerAddr}</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          Slot: {slot.slotNum}
        </div>
        <div>
          Status: Open Auction
        </div>
        <div>
          Bids: {bids.length}
        </div>
      </div>
    )
  }
}

export default SlotDetails
