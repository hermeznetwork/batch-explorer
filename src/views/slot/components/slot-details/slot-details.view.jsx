import React from 'react'
import { Link } from 'react-router-dom'
import { getTokenAmountString } from '../../../../utils/bigint-decimals-converter'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

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
            {getTokenAmountString(slot.winnerBid.bidValue)} HEZ
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
