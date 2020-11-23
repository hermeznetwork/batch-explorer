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
    <Button
      icon={<CopyIcon />}
      onClick={() => handleCopyToClipboardClick(content)}
      className={classes.buttonWrapper}
    />
  )
}

export default CopyToClipboardButton
