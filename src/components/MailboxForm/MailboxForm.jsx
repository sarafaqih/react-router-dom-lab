import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const initialMail = {
  _id: 0,
  boxSize: '',
  boxOwner: ''
}

function MailboxForm(props) {

  const [newMailboxes, setNewMailboxes] = useState(initialMail)

  const navigate = useNavigate()

  function handleChange(event){
    setNewMailboxes({...newMailboxes, [event.target.name]: event.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    props.addBox(newMailboxes)
    setNewMailboxes(initialMail)
    navigate('/mailboxes')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Box Size</label>
        <select name="boxSize" id="boxSize" value={newMailboxes.boxSize} onChange={handleChange}>
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>

        <label htmlFor="boxOwner">Box Owner</label>
        <input type="text" name="boxOwner" id="boxOwner" value={newMailboxes.boxOwner} onChange={handleChange}/>

        <button>Add</button>
      </form>
    </div>
  )
}

export default MailboxForm
