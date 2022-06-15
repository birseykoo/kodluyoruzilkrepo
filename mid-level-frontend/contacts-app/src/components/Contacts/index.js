import {useState,useEffect} from 'react'
import List from './List'
import Form from './form'

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts]);
  
  return (
	<div>Contacts
    <List />
    <Form addContact={setContacts} contacts={contacts} />
  </div>
  )
}


export default Contacts