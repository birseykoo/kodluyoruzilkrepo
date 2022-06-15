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
      <ul className='list'>
        {filtered.map((contact,i) => (
          <li key={i}>
            <span>
              {contact.fullName}
            </span>
            <span>
              {contact.phone}
            </span>
          </li>
        ))}
      </ul>
      <p> 
        {filtered.length} kişi bulundu.
      </p>
    </div>
  )
}

export default List