import React from 'react'

import useRowStyles from './row.styles'

function Row ({ children, wrapped }) {
  const classes = useRowStyles()

  return (
    <div className={wrapped ? classes.rowWrapped : classes.row}>
      {children}
    </div>
  )
}

export default Row
