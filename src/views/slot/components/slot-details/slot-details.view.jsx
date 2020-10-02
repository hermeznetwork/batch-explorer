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
          Bids: {bids.length}
        </div>
        <div>
          Winner bid: ???
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
          Bids: ???
        </div>
      </div>
    )
  }
}

export default SlotDetails
