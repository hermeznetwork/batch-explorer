import React from 'react'

import { ReactComponent as CopyIcon } from '../../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../../utils/dom'
import Button from '../../../shared/button/button.view'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function CoordinatorDetails ({ coordinator }) {
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
          <Row wrapped>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.forgerAddr)}
              />
            </div>
            <Col wrapped>
              {coordinator.forgerAddr}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          Bidder address
        </Col>
        <Col>
          <Row wrapped>
            <div>
              <Button
                icon={<CopyIcon />}
                onClick={() => handleCopyToClipboardClick(coordinator.bidderAddr)}
              />
            </div>
            <Col wrapped>
              {coordinator.bidderAddr}
            </Col>
          </Row>
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
