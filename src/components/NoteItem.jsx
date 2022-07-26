import React from 'react'
import NoteData from '../data/NoteData'
import TrueOrFalse from './TrueOrFalse'
import PropTypes from 'prop-types'
import {useState} from 'react'

function NoteItem({item}) {

  return (
    <div className='textBox'>
      {/* {console.log(NoteData)} */}
      <div className="text">
      <p>{item.text}</p>
      </div>
      <div className="circle">
      <TrueOrFalse done={item.done}/>
      </div>
    </div>
  )
}

NoteItem.defaultProps={
    text: "(There is no notes)",
    done: false

}


export default NoteItem;
