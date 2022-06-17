import {useContext,useState} from 'react'
import UserContext from './UserContext'

function Profile() {
    const {user,setUser} = useContext(UserContext)
    const [loading,setLoading] = useState(false)
    const handleLogin = () => {
        setTimeout(() => {
            setUser({
                id:"1",
                name:"Volkan",
                surname:"Çalışkan",
            })
            setLoading(false)
        }
        ,1000)
    }

  return (
    <div>
{
    !user &&  (<button onClick={handleLogin}>{ loading ? "loading..." : "Login" }</button>)
}
   
    <code>{JSON.stringify(user)}</code>

    {
        user && (<button onClick={()=>setUser(null)}>Logout</button>)
    }
    
    </div>
  )
}

export default Profile