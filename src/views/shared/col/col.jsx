import React from 'react'

import useColStyles from './col.styles'

function Col ({ children, status, link }) {
  const classes = useColStyles()

  console.log('status: ', status)

  return (
    <div className={`${classes.col} ${status ? classes.status : ''} ${link ? classes.link : ''}`}>
      {React.Children.toArray(children).map((child, index) =>
        <div key={index}>
          {child}
        </div>
      )}
    </div>
  )
}

export default Col
