import React from 'react'

import useLayoutStyles from './layout.styles'
import Header from '../header/header'
import Main from '../main/main'

function Layout ({ children, displayHeadlineAndSearch }) {
  const classes = useLayoutStyles()

  return (
    <div className={classes.root}>
      <Header displayHeadlineAndSearch={displayHeadlineAndSearch} />
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
