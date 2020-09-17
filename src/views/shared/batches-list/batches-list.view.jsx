import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Batch from '../batch/batch.view'
import useBatchesListStyles from './batches-list.styles'

function BatchesList ({ batches, hideForgerAddr }) {
  const classes = useBatchesListStyles()

  function findBatch (batchNum) {
    return batches.find((batch) => batch.batchNum === batchNum)
  }

  return (
    <div>
      <section>
        {batches.map((batch, index) =>
          <div
            key={batch.batchNum}
            className={clsx({ [classes.batch]: index > 0 })}
          >
            <Batch
              batchNum={batch.batchNum}
              batchTxNum={findBatch(batch.batchNum).forgeL1TransactionsNum}
              batchForgerAddr={findBatch(batch.batchNum).forgerAddr}
              batchTimeStamp={findBatch(batch.batchNum).timeStamp}
              hideForgerAddr={hideForgerAddr}
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
      batchNum: PropTypes.number.isRequired
    })
  ),
  hideForgerAddr: PropTypes.bool
}

export default BatchesList
