import React from 'react'

function SlotDetails ({ slot, bids }) {
  if (slot.closedAuction) {
    return (
      <div>
        <div>
          Slot: {slot.slotNum}
        </div>
        <div>
          Bids: {bids.lenght}
        </div>
        <div>
          Winner bid: ???
        </div>
        <div>
          Coordinator: {slot.winner.forgerAddr}
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
