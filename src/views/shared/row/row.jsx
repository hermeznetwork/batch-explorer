import React from 'react'

import useRowStyles from './row.styles'

function Row ({ children, wrapped }) {
  const classes = useRowStyles()

  return (
    <div className={wrapped ? classes.rowWrapped : classes.row}>
      {children.map((child, index) =>
        <div key={index}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Row
