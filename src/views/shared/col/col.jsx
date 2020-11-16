import React from 'react'

import useColStyles from './col.styles'

function Col ({ children, status, link, wrapped, flex }) {
  const classes = useColStyles()

  return (
    <div className={`${wrapped ? classes.colWrapped : !flex ? classes.col : classes.colFlex} ${status ? classes.status : ''} ${link ? classes.link : ''}`}>
      {children}
    </div>
  )
}

export default Col
