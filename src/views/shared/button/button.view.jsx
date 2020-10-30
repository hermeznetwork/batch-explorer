import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useButtonStyles from './button.styles'

function Button ({ icon, text, onClick }) {
  const classes = useButtonStyles()

  return (
    <button onClick={onClick} className={classes.root}>
      {icon || <></>}
      <span className={clsx({ [classes.textSpacer]: icon !== undefined })}>
        {text}
      </span>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
