import React from 'react'
import PropTypes from 'prop-types'

import Bid from '../bid/bid.view'
import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function BidsList ({ bids, isSlot, totalNumberOfBidsInSlot }) {
  return (
    <section>
      {isSlot
        ? (
          <Row flex>
            <Col flex>
              Coordinator
            </Col>
            <Col flex>
              Bid amount
            </Col>
          </Row>
        ) : (
          <Row flex>
            <Col flex>
              Slot
            </Col>
            <Col flex>
              Bids
            </Col>
            <Col flex>
              Bid amount
            </Col>
          </Row>
        )}

      {bids.map((bid) =>
        <div key={bid.forgerAddr}>
          <Bid
            forgerAddr={bid.forgerAddr}
            slotNum={bid.slotNum}
            totalNumberOfBidsInSlot={totalNumberOfBidsInSlot}
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
