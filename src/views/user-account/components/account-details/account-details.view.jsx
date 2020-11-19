import React from 'react'
import { Link } from 'react-router-dom'

import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function AccountDetails ({ tokenSymbol, balance, accountIndex }) {
  return (
    <Row flex>
      <Col link flex>
        <Link to={`/token-account/${accountIndex}`}>{tokenSymbol}</Link>
      </Col>
      <Col flex>
        {accountIndex}
      </Col>
      <Col flex>
        {balance}
      </Col>
    </Row>
  )
}

export default AccountDetails
