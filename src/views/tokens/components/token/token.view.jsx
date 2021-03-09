import React from 'react'
import { Link } from 'react-router-dom'

import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function Token ({ usd, symbol }) {
  return (

    <Row flex>
      <Col link flex>
        <Link to='/'>
          <span>{symbol}</span>
        </Link>
      </Col>
      <Col flex>
        {usd} USD
      </Col>
    </Row>
  )
}

export default Token
