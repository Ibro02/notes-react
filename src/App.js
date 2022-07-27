import React from 'react'
import Header from './components/Header'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
import PropTypes from 'prop-types'
import {useState} from 'react'
import NoteData from './data/NoteData'



function App() {

    const [note, setNote] = useState(NoteData)
   
    const deleteElement = (id) =>
    {
  

        setNote(note.filter((item)=> item.id !== id ))
      
      }
  return (
    <>
<Header/>
 <div className='container'>
<NoteList note={note} handleDelete={deleteElement}/>
 </div>
    </>
  )
}


export default App