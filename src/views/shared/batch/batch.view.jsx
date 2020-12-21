import React from 'react'
import { Link } from 'react-router-dom'
import getTimeAgo from '../../../utils/time-converter'

import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function Batch ({ batch }) {
  return (
    <>
      <Row flex>
        <Col link flex>
          <Link to={`/batch/${batch.batchNum}`}>{batch.batchNum}</Link>
        </Col>
        <Col flex>
          {getTimeAgo(batch.timestamp)}
        </Col>
        {batch.forgedTransactions
          ? (
            <Col flex>
              {batch.forgedTransactions}
            </Col>
          ) : <></>}
      </Row>
    </>
  )
}

export default Batch
