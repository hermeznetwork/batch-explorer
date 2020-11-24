import React from 'react'
import PropTypes from 'prop-types'

import Batch from '../batch/batch.view'
import Row from '../../shared/row/row'
import Col from '../../shared/col/col'

function BatchesList ({ batches }) {
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
          Txs
        </Col>
      </Row>
      {batches.map((batch) =>
        <div
          key={batch.batchNum}
        >
          <Batch
            batch={batch}
          />
        </div>
      )}
    </section>
  )
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      batchNum: PropTypes.number.isRequired
    })
  )
}

export default BatchesList
