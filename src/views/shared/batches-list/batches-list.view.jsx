import React from 'react'
import PropTypes from 'prop-types'

import Batch from '../batch/batch.view'

function BatchesList ({ batches }) {
  return (
    <section>
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
