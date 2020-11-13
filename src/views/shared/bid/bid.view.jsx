import React from 'react'
import { Link } from 'react-router-dom'
import { getTokenAmountString } from '../../../utils/bigint-decimals-converter'

import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function Bid ({ forgerAddr, bidValue, numberOfBids, slotNum, isSlot }) {
  if (isSlot) {
    return (
      <section>
        <Row flex>
          <Col flex>
            Coordinator
          </Col>
          <Col flex>
            Bid amount
          </Col>
        </Row>
        <Row flex>
          <Col link flex>
            <Link to={`/coordinator/${forgerAddr}`}>{forgerAddr}</Link>
          </Col>
          <Col flex>
            {getTokenAmountString(bidValue)} HEZ
          </Col>
        </Row>
      </section>
    )
  } else {
    return (
      <section>
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
        <Row flex>
          <Col link flex>
            <Link to={`/slot/${slotNum}`}>{slotNum}</Link>
          </Col>
          <Col flex>
            {numberOfBids}
          </Col>
          <Col flex>
            {getTokenAmountString(bidValue)} HEZ
          </Col>
        </Row>
      </section>
    )
  }
}

export default Bid
