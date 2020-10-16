import React from 'react'
import { Link } from 'react-router-dom'

import useBatchStyles from './batch.styles'

function Batch ({ batchNum, batchTxNum, batchForgerAddr, batchTimeStamp, hideForgerAddr }) {
  const classes = useBatchStyles()

  const diff = new Date(new Date() - new Date(batchTimeStamp * 1000))
  const seconds = ('0' + diff.getSeconds()).substr(-2) + 's ago'
  const minutes = ('0' + diff.getMinutes()).substr(-2) + 'm '
  const hours = diff.getHours() + 'h '
  const days = diff.getDate() > 1 ? ' more than a day ago' : ''
  const formattedTime = !days ? hours + minutes + seconds : days

  return (
    <section>
      <div className={classes.row}>
        <div className={classes.col}>
          Batch
        </div>
        <div className={classes.col}>
          Age
        </div>
        <div className={classes.col}>
          Transactions
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.link}`}>
          <Link to={`/batch/${batchNum}`}>{batchNum}</Link>
        </div>
        <div className={classes.col}>
          {formattedTime}
        </div>
        <div className={classes.col}>
          {batchTxNum}
        </div>
      </div>

      {
        hideForgerAddr
          ? <></>
          : <Link to={`/coordinator/${batchForgerAddr}`}>Coordinator: {batchForgerAddr}</Link>
      }

    </section>
  )
}

export default Batch
