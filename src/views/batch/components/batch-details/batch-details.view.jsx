import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import useBatchDetailsStyles from './batch-details.styles'
import angleDown from '../../../../images/icons/angle-down.svg'
import angleUp from '../../../../images/icons/angle-up.svg'
import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()
  const [areDeailsVisible, setDetailsVisible] = React.useState()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  function handleDetailClick () {
    setDetailsVisible(true)
  }

  function handleCloseDetailClick () {
    setDetailsVisible(false)
  }

  return (
    <div>
      <Row>
        <Col>
          Eth Block Hash
        </Col>
        <Col>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(batch.ethereumBlockHash)}
              />
            </div>
            <div className={classes.colWrapped}>
              {batch.ethereumBlockHash}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>Eth Block Number</Col>
        <Col>{batch.ethereumBlockNum}</Col>
      </Row>
      <Row>
        <Col>Status</Col>
        <Col status>Completed</Col>
      </Row>
      <Row>
        <Col>Timestamp</Col>
        <Col>{new Date(batch.timestamp).toLocaleString()}</Col>
      </Row>
      <Row>
        <Col>Fees Collected</Col>
        <Col>{batch.historicTotalCollectedFeesUSD} USD</Col>
      </Row>
      <Row>
        <Col>Coordinator</Col>
        <Col link>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(batch.forgerAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              <Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link>
            </div>
          </div>
        </Col>
      </Row>
      <div className={clsx({
        [classes.detailHidden]: true,
        [classes.detailVisible]: areDeailsVisible
      })}
      >
        <Row>
          <Col>Number of txs</Col>
          <Col>{batch.forgeL1TransactionsNum}</Col>
        </Row>
        <Row>
          <Col>Slot</Col>
          <Col link><Link to={`/slot/${batch.slotNum}`}>{batch.slotNum}</Link></Col>
        </Row>
        <Row>
          <Col>State root</Col>
          <Col>
            <div className={classes.rowWrapped}>
              <div>
                <Button
                  icon={<CopyIcon />}
                  onClick={() => handleCopyToClipboardClick(batch.stateRoot)}
                />
              </div>
              <div className={classes.colWrapped}>
                {batch.stateRoot}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>Exit root</Col>
          <Col>
            <div className={classes.rowWrapped}>
              <div>
                <Button
                  icon={<CopyIcon />}
                  onClick={() => handleCopyToClipboardClick(batch.exitRoot)}
                />
              </div>
              <div className={classes.colWrapped}>
                {batch.exitRoot}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <button
        className={clsx({
          [classes.detailButton]: true,
          [classes.detailButtonHidden]: areDeailsVisible,
          [classes.detailVisible]: true
        })}
        onClick={() => handleDetailClick()}
      >
        See details
        <img src={angleDown} className={classes.icon} alt='See details' />
      </button>
      <button
        className={clsx({
          [classes.detailButton]: true,
          [classes.detailHidden]: true,
          [classes.detailVisible]: areDeailsVisible
        })}
        onClick={() => handleCloseDetailClick()}
      >
        Close details
        <img src={angleUp} className={classes.icon} alt='Close details' />
      </button>
    </div>
  )
}

export default BatchDetails
