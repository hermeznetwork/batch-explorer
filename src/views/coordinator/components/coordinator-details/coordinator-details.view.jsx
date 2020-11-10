import React from 'react'

import useCoordinatorDetailsStyles from './coordinator-details.styles'
import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function CoordinatorDetails ({ coordinator }) {
  const classes = useCoordinatorDetailsStyles()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  return (
    <section>
      <Row>
        <Col>
          Forger address
        </Col>
        <Col>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.forgerAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              {coordinator.forgerAddr}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          Bidder address
        </Col>
        <Col>
          <div className={classes.rowWrapped}>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.bidderAddr)}
              />
            </div>
            <div className={classes.colWrapped}>
              {coordinator.bidderAddr}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          URL
        </Col>
        <Col link>
          <a
            href={coordinator.URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            {coordinator.URL}
          </a>
        </Col>
      </Row>
    </section>
  )
}

export default CoordinatorDetails
