// import {useEffect,useState} from 'react'

// export default function User() {
//  const [users, setUsers] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setUsers(data)
//         )
//         .catch(err => console.log(err))
//         .finally(() => setIsLoading(false));
//     }, [])

   

//   return (
//     <div>User
//     {
//         isLoading ? <p>Loading...</p> :
//         users.map(user => <p key={user.id}>{user.name}</p>)
//     }
//     </div>
//   )
// }
