import React from 'react'
import NoteItem from './NoteItem'
import NoteData from '../data/NoteData'
import PropTypes from 'prop-types'
import {useState} from 'react'

function NoteList() {
  return (
    <div>
        {NoteData.map((item, index)=>
        //console.log(txt)
        (
            <NoteItem className="singleItem" item={item} key={index} />
        ))}
    </div>
  )
}

export default NoteList