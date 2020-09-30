import React, { useState } from 'react'

import useSearchStyles from './search.styles'

function Search () {
  const classes = useSearchStyles()
  const [value, setValue] = useState('')
  const input = <input value={value} onChange={e => setValue(e.target.value)} type='text' />

  return (
    <div className={classes.root}>
      {input}
            Value: {value}
    </div>
  )
}

export default Search
