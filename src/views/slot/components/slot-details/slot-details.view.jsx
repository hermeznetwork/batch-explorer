import React from 'react'
import { Link } from 'react-router-dom'

import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'
import { getFixedTokenAmount } from '../../../../utils/currencies'
import { HEZ_TOKEN_DECIMALS } from '../../../../constants'

function SlotDetails ({ slot, totalNumberOfBidsInSlot }) {
  if (slot.closedAuction) {
    return (
      <div>
        <Row>
          <Col>
            Status
          </Col>
          <Col>
            Closed Auction
          </Col>
        </Row>
        <Row>
          <Col>
            Bids
          </Col>
          <Col>
            {totalNumberOfBidsInSlot}
          </Col>
        </Row>
        <Row>
          <Col>
            Winner bid
          </Col>
          <Col>
            {getFixedTokenAmount(slot.winnerBid.bidValue, HEZ_TOKEN_DECIMALS)} HEZ
          </Col>
        </Row>
        <Row>
          <Col>
            Coordinator
          </Col>
          <Col link>
            <Link to={`/coordinator/${slot.winner.forgerAddr}`}>{slot.winner.forgerAddr}</Link>
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <Row>
          <Col>
            Status
          </Col>
          <Col>
            Open Auction
          </Col>
        </Row>
        <Row>
          <Col>
            Bids
          </Col>
          <Col>
            {totalNumberOfBidsInSlot}
          </Col>
        </Row>
      </div>
    )
  }
}

export default SlotDetails
