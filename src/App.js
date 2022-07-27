import React from 'react'
import Header from './components/Header'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
import PropTypes from 'prop-types'
import {useState} from 'react'
import NoteData from './data/NoteData'
import TextBox from './components/shared/TextBox'
import NoteForm from './components/NoteForm'


function App() {

    const [note, setNote] = useState(NoteData)
    const  [newNote, setNewNote] =useState()

    const deleteElement = (id) =>
    {
  

        setNote(note.filter((item)=> item.id !== id ))
      
      }
      const addNewNote = (newElement) =>
      {
        
        setNote([newElement, ...note])
        console.log(newElement)
      }
  return (
    <>
<Header/>
 <div className='container'>
<NoteForm handleNewNote={addNewNote}/>
<NoteList note={note} handleDelete={deleteElement}/>
 </div>
    </>
  )
}


export default App 