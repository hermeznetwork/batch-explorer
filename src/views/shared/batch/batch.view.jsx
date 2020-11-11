import React from 'react'
import { Link } from 'react-router-dom'
import getTimeAgo from '../../../utils/time-converter'

import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function Batch ({ batch }) {
  return (
    <section>
      <Row flex>
        <Col flex>
          Batch
        </Col>
        <Col flex>
          Age
        </Col>
        <Col flex>
          Transactions
        </Col>
      </Row>
      <Row flex>
        <Col link flex>
          <Link to={`/batch/${batch.batchNum}`}>{batch.batchNum}</Link>
        </Col>
        <Col flex>
          {getTimeAgo(batch.timestamp)}
        </Col>
        <Col flex>
          {batch.forgeL1TransactionsNum}
        </Col>
      </Row>
    </section>
  )
}

export default Batch
