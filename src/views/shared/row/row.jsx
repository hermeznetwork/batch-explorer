import React from 'react'

import useRowStyles from './row.styles'

function Row ({ children }) {
  const classes = useRowStyles()

  return (
    <div className={classes.row}>
      {children.map((child, index) =>
        <div key={index}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Row
