import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches }) {
  const classes = useBatchesListStyles()

  function getBatch (batchId) {
    return batches.find((batch) => batch.BatchID === batchId)
  }

  return (
    <div>
      <section>
        {batches.map((batch, index) =>
          <div
            key={batch.BatchID}
            className={clsx({ [classes.batch]: index > 0 })}
          >
            <Batch
              batchId={batch.BatchID}
              batchTxNum={getBatch(batch.BatchID).numberOfTransactions}
            />
          </div>
        )}
      </section>
    </div>
  )
}

BatchesList.propTypes = {
  batches: PropTypes.arrayOf(
    PropTypes.shape({
      BatchID: PropTypes.number.isRequired
    })
  )
}

export default BatchesList
