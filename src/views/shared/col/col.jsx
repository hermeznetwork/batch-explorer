import React from 'react'

import useColStyles from './col.styles'

function Col ({ children, status, link, wrapped }) {
  const classes = useColStyles()

  return (
    <div className={`${wrapped ? classes.colWrapped : classes.col} ${status ? classes.status : ''} ${link ? classes.link : ''}`}>
      {children}
    </div>
  )
}

export default Col
