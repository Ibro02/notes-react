import React from 'react'
import TrueOrFalse from './TrueOrFalse'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import TextBox from './shared/TextBox'

function NoteItem({item,handleDelete}) {
const [color, setColor] = useState('white')

  return (
    <TextBox backgroundColor={color}>
      {/* {console.log(NoteData)} */}
      <div className="text">
      <p>{item.text}</p>
      </div>

<div className='delAndStats'>

      <div className="circle">
      <TrueOrFalse done={item.done}/>
      </div>
      <button className="deleteBtn" onClick={()=>handleDelete(item.id)}>
            <FaTimes/>
        </button>
</div>

    </TextBox>
  )

}

NoteItem.defaultProps={
    text: "Note",
    done: false,
   color: 'white'
}


export default NoteItem;
