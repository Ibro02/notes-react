import React from 'react'
import NoteItem from './NoteItem'
import NoteData from '../data/NoteData'
import PropTypes from 'prop-types'
import {useState} from 'react'
import TextBox from './shared/TextBox'


function NoteList({note,handleDelete}) {
  if (note.length===0) 
  return <h1 className='alert'>There is no notes!</h1>

  else
  return (
    <div>
        {note.map((item)=>
        //console.log(txt)
        (

            <NoteItem  key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
        
    </div>
  )
  
}

export default NoteList