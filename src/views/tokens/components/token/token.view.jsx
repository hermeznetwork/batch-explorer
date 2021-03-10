import React from 'react'

import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function Token ({ usd, symbol, ethereumAddress }) {
  return (

    <Row flex>
      <Col link flex>
        <a
          href={`${process.env.REACT_APP_ETHERSCAN_URL}/address/${ethereumAddress}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {symbol}
        </a>
      </Col>
      <Col flex>
        {usd} USD
      </Col>
    </Row>
  )
}

export default Token
