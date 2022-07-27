import React from 'react'
import PropTypes from 'prop-types'

function Button({children, isDisabled,version, type}) {
//console.log(version)
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled} >{children}</button>
  )
}

Button.defaultProps = {
    isDisabled: true,
    version: 'primary',
    type: 'button'
    }

Button.propTypes={
    version: PropTypes.string
}


export default Button