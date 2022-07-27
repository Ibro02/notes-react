import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

function TextBox({children,backgroundColor}) {
   console.log(backgroundColor);
   const textBoxStyle =
{ 
    backgroundColor: backgroundColor,
    color: (backgroundColor !=='white')?"white":"black"
}

  return (
    <div className='textBox' style={textBoxStyle}>
        {children}
    </div>
  )
}

export default TextBox