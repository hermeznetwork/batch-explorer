import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useButtonStyles from './button.styles'

function Button ({ icon, text, onClick, className }) {
  const classes = useButtonStyles()

  return (
    <div className={className}>
      <button onClick={onClick} className={classes.root}>
        {icon || <></>}
        <span className={clsx({ [classes.textSpacer]: icon !== undefined })}>
          {text}
        </span>
      </button>
    </div>
  )
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Button
