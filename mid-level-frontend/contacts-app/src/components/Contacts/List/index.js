import {useState} from 'react'

function List({contacts}) {
  const [filteredContacts, setFilteredContacts] = useState('');
  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some(key=>{
      return item[key].toLowerCase().includes(filteredContacts.toLocaleLowerCase())
    }
    )
  }
  )
  return (
    <div>
    <input type="text" placeholder="Kişiler" value={filteredContacts} onChange={(e)=> setFilteredContacts(e.target.value)}/>
      <ul>
        {filtered.map((contact,i) => (
          <li key={i}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  )
}

export default List