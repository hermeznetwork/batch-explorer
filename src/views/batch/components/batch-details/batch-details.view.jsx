import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import useBatchDetailsStyles from './batch-details.styles'
import { ReactComponent as AngleDown } from '../../../../images/icons/angle-down.svg'
import { ReactComponent as AngleUp } from '../../../../images/icons/angle-up.svg'
import CopyToClipboardButton from '../../../shared/copy-to-clipboard-button/copy-to-clipboard-button.view'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function BatchDetails ({ batch }) {
  const classes = useBatchDetailsStyles()
  const [areDeailsVisible, setDetailsVisible] = React.useState()

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
          <Row wrapped>
            <CopyToClipboardButton content={batch.ethereumBlockHash} />
            <Col wrapped>
              {batch.ethereumBlockHash}
            </Col>
          </Row>
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
        <Col>${batch.historicTotalCollectedFeesUSD}</Col>
      </Row>
      <Row>
        <Col>Coordinator</Col>
        <Col link>
          <Row wrapped>
            <CopyToClipboardButton content={batch.forgerAddr} />
            <Col wrapped>
              <Link to={`/coordinator/${batch.forgerAddr}`}>{batch.forgerAddr}</Link>
            </Col>
          </Row>
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
            <Row wrapped>
              <CopyToClipboardButton content={batch.stateRoot} />
              <Col wrapped>
                {batch.stateRoot}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>Exit root</Col>
          <Col>
            <Row wrapped>
              <CopyToClipboardButton content={batch.exitRoot} />
              <Col wrapped>
                {batch.exitRoot}
              </Col>
            </Row>
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
        <AngleDown className={classes.icon} />
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
        <AngleUp className={classes.icon} />
      </button>
    </div>
  )
}

export default BatchDetails
