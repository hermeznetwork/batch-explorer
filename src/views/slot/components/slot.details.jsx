import React from 'react'

function SlotDetails ({ slot }) {
  return (
    <div>
      <div>
        Slot: {slot.slotNum}
      </div>
      <div>
        Winner bid:
      </div>
      <div>
        ForgerAddr: {slot.winner.forgerAddr}
      </div>
    </div>
  )
}

export default SlotDetails
