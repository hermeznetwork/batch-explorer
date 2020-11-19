import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Container from '../shared/container/container.view'
import Title from '../shared/title/title'
import useSearchErrorStyles from './search-error.styles'

function SearchError () {
  const classes = useSearchErrorStyles()
  const { searchTerm } = useParams()

  return (
    <div className={classes.root}>
      <Container disableTopGutter>
        <div className={classes.wrapper}>
          <Title>We couldn't find "{searchTerm}"</Title>
          <div>Please enter an address, a transaction hash or a batch number.</div>
          <div className={classes.backButtonWrapper}>
            <Link to='/' className={classes.backButton}>Back Home</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SearchError
