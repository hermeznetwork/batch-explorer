import React from 'react'

import useTitleStyles from './title.styles'

function Row ({ children }) {
  const classes = useTitleStyles()

  return (
    <h4 className={classes.title}>
      {React.Children.toArray(children).map((child, index) =>
        <span key={index}>
          {child}
        </span>
      )}
    </h4>
  )
}

export default Row
