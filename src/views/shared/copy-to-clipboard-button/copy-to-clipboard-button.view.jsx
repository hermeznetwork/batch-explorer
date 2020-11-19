import React from 'react'

import useCopyToClipboardButtonStyles from './copy-to-clipboard-button.styles'
import { ReactComponent as CopyIcon } from '../../../images/icons/copy.svg'
import { copyToClipboard } from '../../../utils/dom'
import Button from '../button/button.view'

function CopyToClipboardButton ({ content }) {
  const classes = useCopyToClipboardButtonStyles()

  function handleCopyToClipboardClick (item) {
    copyToClipboard(item)
  }

  return (
    <div className={classes.buttonWrapper}>
      <Button
        icon={<CopyIcon />}
        onClick={() => handleCopyToClipboardClick(content)}
      />
    </div>
  )
}

export default CopyToClipboardButton
