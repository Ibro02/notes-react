import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Link,Route,Routes, useNavigate} from 'react-router-dom'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
import PropTypes from 'prop-types'
import {useState} from 'react'
import NoteData from './data/NoteData'
import TextBox from './components/shared/TextBox'
import NoteForm from './components/NoteForm'
import AboutUsPage from './components/pages/AboutUsPage'
import QuestionMark from './components/shared/QuestionMark'
import {NavLink} from 'react-router-dom'
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
<Router>
<Header/>
 <div className='container'>
  <Routes>
<Route exact path='/' element={
  <>
<NoteForm handleNewNote={addNewNote}/>
<NoteList note={note} handleDelete={deleteElement}/>
  </>

}/>


<Route path='/about' element={<AboutUsPage/>}/>
<Route path='/about/:id' element={<AboutUsPage/>}/>


  </Routes>
 

 
 </div>
 <Link to='/about'>
 <QuestionMark/>
 </Link>
</Router>
  )
}


export default App 