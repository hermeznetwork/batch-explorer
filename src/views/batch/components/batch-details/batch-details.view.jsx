import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import useBatchDetailsStyles from './batch-details.styles'
import angleDown from '../../../../images/icons/angle-down.svg'
import angleUp from '../../../../images/icons/angle-up.svg'
import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()
  const [areDeailsVisible, seeDetailsVisible] = React.useState()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  function handleSeedetailsClick () {
    seeDetailsVisible(true)
  }

  function handleClosedetailsClick () {
    seeDetailsVisible(false)
  }

  return (
    <div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Hash</div>
        <div className={classes.col}>
          <Button
            icon={<CopyIcon />}
            onClick={() => handleCopyToClipboardClick(batch.ethereumBlockHash)}
          />
          {batch.ethereumBlockHash}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Eth Block Number</div>
        <div className={classes.col}>{batch.ethereumBlockNum}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Status</div>
        <div className={`${classes.col} ${classes.status}`}>Completed</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Timestamp</div>
        <div className={classes.col}>{new Date(batch.timestamp).toLocaleString()}</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Fees Collected</div>
        <div className={classes.col}>{batch.historicTotalCollectedFeesUSD} USD</div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>Coordinator</div>
        <div className={`${classes.col} ${classes.link}`}>
          <Button
            icon={<CopyIcon />}
            onClick={() => handleCopyToClipboardClick(batch.forgerAddr)}
          />
          <Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link>
        </div>
      </div>
      <div className={clsx({
        [classes.seeDetailsHidden]: true,
        [classes.seeDetailsVisible]: areDeailsVisible
      })}
      >
        <div className={classes.row}>
          <div className={classes.col}>Number of txs</div>
          <div className={classes.col}>{batch.forgeL1TransactionsNum}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>Slot</div>
          <div className={`${classes.col} ${classes.link}`}><Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link></div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>State root</div>
          <div className={classes.col}>
            <Button
              icon={<CopyIcon />}
              onClick={() => handleCopyToClipboardClick(batch.stateRoot)}
            />
            {batch.stateRoot}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>Exit root</div>
          <div className={classes.col}>
            <Button
              icon={<CopyIcon />}
              onClick={() => handleCopyToClipboardClick(batch.exitRoot)}
            />
            {batch.exitRoot}
          </div>
        </div>
      </div>
      <button
        className={clsx({
          [classes.seeDetailsButton]: true,
          [classes.seeDetailsButtonHidden]: areDeailsVisible,
          [classes.seeDetailsVisible]: true
        })}
        onClick={() => handleSeedetailsClick()}
      >
        See details
        <img src={angleDown} className={classes.icon} alt='See details' />
      </button>
      <button
        className={clsx({
          [classes.seeDetailsButton]: true,
          [classes.seeDetailsHidden]: true,
          [classes.seeDetailsVisible]: areDeailsVisible
        })}
        onClick={() => handleClosedetailsClick()}
      >
        Close details
        <img src={angleUp} className={classes.icon} alt='Close details' />
      </button>
    </div>
  )
}

export default BatchDetails
