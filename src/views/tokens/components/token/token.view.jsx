import React from 'react'
import { Link } from 'react-router-dom'

// import useTokenStyles from './token.styles'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function Token ({ usd, symbol }) {
  // const classes = useTokenStyles()

  return (

    <Row flex>
      <Col link flex>
        <Link to='/'>
          <span>{symbol}</span>
        </Link>
      </Col>
      <Col flex>
        {usd}
      </Col>
    </Row>
  )
}

export default Token
