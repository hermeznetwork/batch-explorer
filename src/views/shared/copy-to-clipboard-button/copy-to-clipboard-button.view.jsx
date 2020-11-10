import React from 'react'

import { ReactComponent as CopyIcon } from '../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../utils/dom'
import Button from '../button/button.view'

function CopyToClipboardButton ({ content }) {
  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  return (
    <div>
      <Button
        icon={<CopyIcon />}
        onClick={() => handleCopyToClipboardClick(content)}
      />
    </div>
  )
}

export default CopyToClipboardButton
