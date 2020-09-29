import React from 'react'

function Bid ({ forgerAddr, bidValue, numberOfBids, slot, isSlot }) {
  if (isSlot) {
    return (
      <div>
        <div>
          Coordinator: {forgerAddr}
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
          {/* TODO: missing from API response */}
          {/* Slot: {slot} */}
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
