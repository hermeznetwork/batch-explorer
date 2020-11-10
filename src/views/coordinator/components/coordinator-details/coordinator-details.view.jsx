import React from 'react'

import CopyToClipboardButton from '../../../shared/copy-to-clipboard-button/copy-to-clipboard-button.view'
import Row from '../../../shared/row/row'
import Col from '../../../shared/col/col'

function CoordinatorDetails ({ coordinator }) {
  return (
    <section>
      <Row>
        <Col>
          Forger address
        </Col>
        <Col>
          <Row wrapped>
            <CopyToClipboardButton content={coordinator.forgerAddr} />
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
            <CopyToClipboardButton content={coordinator.bidderAddr} />
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
