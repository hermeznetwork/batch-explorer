import React from 'react'

import useColStyles from './col.styles'

function Col ({ children, status, link, wrapped }) {
  const classes = useColStyles()

  return (
    <div className={`${wrapped ? classes.colWrapped : classes.col} ${status ? classes.status : ''} ${link ? classes.link : ''}`}>
      {React.Children.toArray(children).map((child, index) =>
        <div key={index}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Col
