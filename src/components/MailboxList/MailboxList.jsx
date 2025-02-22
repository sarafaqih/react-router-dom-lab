import React from 'react'
import { Link } from 'react-router'

function MailboxList({mailboxes}) {
  return (
    <>
    <div>
    {mailboxes.map((mailbox) => {
      return(
      <ul key={mailbox._id} className='mail-box'>
        <li><Link to={`/mailboxes/${mailbox._id}`}><strong>{mailbox._id}</strong></Link></li>
        <li><strong>Box Size: </strong>{mailbox.boxSize}</li>
        <li><strong>Box Owner: </strong>{mailbox.boxOwner}</li>
      </ul>
      )
      })
      }
      
    </div>
    </>
  )
}

export default MailboxList
