import React from 'react'
import { useParams } from 'react-router';
import PageNotFound from '../PageNotFound';

function MailboxDetails({mailboxes}) {
  const { mailboxId } = useParams();
  console.log(mailboxes)
  const selectedBox = mailboxes.find((mailbox) => (
   mailbox._id === Number(mailboxId)
));
  return (
    <>
    {selectedBox ? (
    <ul className='mail-box'>
      <li className='mail-box'><strong>{selectedBox._id}</strong></li>
      <li><strong>Size:</strong> {selectedBox.boxSize}</li>
      <li><strong>Owner:</strong> {selectedBox.boxOwner}</li>
    </ul> ) : (
        <h2>Mailbox Not Found</h2>
    )
    }
  </>
  )
  
}

export default MailboxDetails
