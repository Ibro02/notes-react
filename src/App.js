import React from 'react'
import Header from './components/Header'
import NoteItem from './components/NoteItem'
import NoteList from './components/NoteList'
function App() {
  return (

    <>
<Header/>
 <div className='container'>
<NoteList/>
 </div>
    </>
  )
}

export default App