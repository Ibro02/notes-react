import React from 'react'
import TextBox from '../shared/TextBox'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../shared/Button'
import { Navigate } from 'react-router-dom'

function AboutUsPage() {
const navigator = useNavigate()
  const params = useParams()

  const onClick = () => 
  {
    console.log('Welcome Home!');
    navigator('/');
  }
  return (
    <TextBox>
     <h1>About</h1> 
     <p>ID: {params.id}</p>
     
     <form className='backBtn' onClick={onClick}>

     <Button type={'submit'} version={'primary'} isDisabled={false}>Back to Home</Button>

     </form>
    </TextBox>
    
  )
}

export default AboutUsPage
