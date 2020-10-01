import React, { useState } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import useSearchStyles from './search.styles'

function Search ({
  changeRoute
}) {
  const classes = useSearchStyles()
  const [value, setValue] = useState('')
  const input = <input value={value} onChange={e => setValue(e.target.value)} type='text' />
  let route = '/'

  function redirect () {
    route = '/test/' + value

    changeRoute(route)
  }

  return (
    <div className={classes.root}>
      {input}
      <button onClick={() => { redirect() }}>CLICK ME</button>
      Value: {value}
    </div>
  )
}

Search.propTypes = {
  changeRoute: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(Search)
