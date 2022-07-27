import React from 'react'
import TextBox from './shared/TextBox'
import Button from './shared/Button'
import { useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import PropTypes from 'prop-types'
import {v4 as uuidv4} from 'uuid'
function NoteForm({handleNewNote}) {
    
    const [text, setText] = useState('')
    const [done, setDone] = useState(false)
    const [message, setMessage] = useState('')

    const handleText = e =>
    {
    setText(e.target.value)
    }
    
    
    const handleBool = e =>
    {
        e.preventDefault()
     
        if (e.currentTarget===document.querySelector('.isTrue'))
        {
            setDone(true);
            {
                setMessage("You selected ✔")
        }
        }
        else
        {setDone(false);
            setMessage("You selected X")
        }
    //console.log(e.currentTarget)
    
    }
    
const NewNote = (e) =>
{
    e.preventDefault();
    const newNote = 
    {
        text,
        done,
        id: uuidv4()
    }
    
   handleNewNote(newNote);
   setMessage('');
   document.querySelector('input').value=null
}

  return (
    <TextBox>
        <form onSubmit={NewNote}>
            <div className="noteForm">

            <div className="inputContainer">

            <input type="text" id='inp' className='inputForm' placeholder='There is text...' onChange={handleText}/>
            <label htmlFor="inp">Add a note</label>
            </div>
             
             <div className="choose" >
            <label>Is it done?</label>
            <div className="backGround">
<div className="isTrue" onClick={handleBool}>

                <AiOutlineCheck className='check'/>
</div>

<div className="isFalse"  onClick={handleBool}>
                <AiOutlineClose className='close' />
</div>
            </div>
<div className="output">{message}</div>
             </div>
            </div>
            <div className="formButton" >

            <Button isDisabled={false} type={'submit'} version={'secondary'}>Submit</Button>
            </div>
        </form>
    </TextBox>
  )
}

NoteForm.propTypes = {
    done: PropTypes.bool.isRequired
}

export default NoteForm