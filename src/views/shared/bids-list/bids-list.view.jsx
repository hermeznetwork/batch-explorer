import React from 'react'
import PropTypes from 'prop-types'

import Bid from '../bid/bid.view'

function BidsList ({ bids, isSlot }) {
  return (
    <section>
      {bids.map((bid, index) =>
        <div key={bid.forgerAddr}>
          <Bid
            forgerAddr={bid.forgerAddr}
            slotNum={bid.slotNum}
            numberOfBids={bids.length}
            bidValue={bid.bidValue}
            isSlot={isSlot}
          />
        </div>
      )}
    </section>
  )
}

BidsList.propTypes = {
  bids: PropTypes.arrayOf(
    PropTypes.shape({
      forgerAddr: PropTypes.string.isRequired
    })
  )
}

export default BidsList
