import {useState,useEffect} from 'react'
import './style.css'
import List from './List'
import Form from './form'

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts]);
  
  return (
	<div id='container'>
    <div><h2>Kişiler</h2></div> 
    <List  contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts} />
  </div>
  )
}


export default Contacts