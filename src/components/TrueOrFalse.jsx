import React from 'react'
import NoteData from '../data/NoteData'
import { AiOutlineCheck } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

function TrueOrFalse({done}) {
    if(done===true)
  return <AiOutlineCheck className='check'/>

  return <AiOutlineClose className='close'/>
}

export default TrueOrFalse