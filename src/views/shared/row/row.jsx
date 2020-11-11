import React from 'react'

import useRowStyles from './row.styles'

function Row ({ children, wrapped, flex }) {
  const classes = useRowStyles()

  return (
    <div className={`${wrapped ? classes.rowWrapped : !flex ? classes.row : classes.rowFlex}`}>
      {children}
    </div>
  )
}

export default Row
