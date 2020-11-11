import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../shared/container/container.view'
import Title from '../shared/title/title'
import useSearchErrorStyles from './search-error.styles'

function Search () {
  const classes = useSearchErrorStyles()

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>We couldn’t find what you are looking for</Title>
          <div>Please enter an address, a transaction hash or a batch number.</div>
          <div className={classes.backButton}>
            <Link to='/'>Back Home</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Search
