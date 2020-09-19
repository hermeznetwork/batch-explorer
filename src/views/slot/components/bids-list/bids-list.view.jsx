import React from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import Bid from '../bid/bid.view'

function BidsList ({ bids }) {
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
              bidValue={bid.bidValue}
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
