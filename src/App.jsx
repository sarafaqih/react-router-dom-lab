import { Route } from "react-router";
import { Routes } from "react-router";
import { useEffect, useState } from "react";
import MailboxList from './components/MailboxList/MailboxList.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {

  const [mailboxes, setMailboxes] = useState([])


  function addBox(newMailbox){
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }

  useEffect(() => {
    console.log(mailboxes)
  }, [mailboxes])

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};

export default App;
