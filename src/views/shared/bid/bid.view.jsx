import React from 'react'
import { Link } from 'react-router-dom'
import { getTokenAmountString } from '../../../utils/bigint-decimals-converter'
import getPartiallyHiddenAddress from '../../../utils/address-shortener'

import useBidStyles from './bid.styles'
import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function Bid ({ forgerAddr, bidValue, numberOfBids, slotNum, isSlot }) {
  const classes = useBidStyles()

  if (isSlot) {
    return (
      <Row flex>
        <Col link flex>
          <Link to={`/coordinator/${forgerAddr}`}>
            <span className={classes.shorthenedAddress}>{getPartiallyHiddenAddress(forgerAddr)}</span>
            <span className={classes.notShorthenedAddress}>{forgerAddr}</span>
          </Link>
        </Col>
        <Col flex>
          {getTokenAmountString(bidValue)} HEZ
        </Col>
      </Row>
    )
  } else {
    return (
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
    )
  }
}

export default Bid
