import React from 'react'

function Bid ({ forgerAddr, bidValue }) {
  return (
    <div>
      <div>
        Bid amount: {bidValue}
      </div>
      <div>
        Coordinator: {forgerAddr}
      </div>
    </div>
  )
}

export default Bid
