import React from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import Bid from '../bid/bid.view'

function BidsList ({ bids, isSlot }) {
  return (
    <div>
      <section>
        {bids.map((bid, index) =>
          <div
            key={bid.forgerAddr}
            // className={clsx({ [classes.bid]: index > 0 })}
          >
            <Bid
              forgerAddr={bid.forgerAddr}
              // TODO: missing from API response
              // slot={bid.slot}
              numberOfBids={bids.length}
              bidValue={bid.bidValue}
              isSlot={isSlot}
            />
          </div>
        )}
      </section>
    </div>
  )
}

BidsList.propTypes = {
  bids: PropTypes.arrayOf(
    PropTypes.shape({
      ForgerAddr: PropTypes.string.isRequired
    })
  )
}

export default BidsList
