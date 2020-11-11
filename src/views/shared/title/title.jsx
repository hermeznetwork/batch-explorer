import React from 'react'

import useTitleStyles from './title.styles'

function Row ({ children }) {
  const classes = useTitleStyles()

  return (
    <h4 className={classes.title}>
      {children}
    </h4>
  )
}

export default Row
