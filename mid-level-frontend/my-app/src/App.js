// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   }

//   const handleReset = () => {
//     setCount(0);
//   }

//   const handleDecrement = () => {
//     setCount(count - 1);
//   }

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const onChangeInput = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   }

//   return (
//     <div className="App">
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     <br/>
//       <br />
//       <br />
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" value={form.name} onChange={onChangeInput} />
//         </label>
//         <label>
//           Email:
//           <input type="text" name="email" value={form.email} onChange={onChangeInput} />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={form.password} onChange={onChangeInput} />
//         </label>
//       </form>

//     </div>
//   );
// }

// export default App;

// import React from 'react'  // Feact api is used to create the component
// import User from './components/User'
// function App() {
//   return (
//     <div>
//       <User />
//     </div>
//   )
// }

// export default App

// import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom'

// function App() {

//   return (
//     <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/users">Users</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/users">
//           <Users />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//     </Router>
//   )
// }
// function Home() {
//     return <h2>Home</h2>
//   }

//   function About() {
//     return <h2>About</h2>
//   }

//   function Users() {
//     return <h2>Users</h2>
//   }

// export default App

// import { Formik, useFormik } from "formik";
// import './App.css'

// function App() {
//     const {handleSubmit,handleChange,values} = useFormik({
//         initialValues: {
//             firstName:"",
//                     lastName:"",
//                     email:"",
//                     gender:"male",
//                     hobies:[],
//                     country:""
//         },onSubmit: (values) => {
//             console.log(values)
//         }

//     })

//     return(
//         <div>
//             <h1>Sing Up</h1>

//                 <form onSubmit={handleSubmit}>

//                         <label htmlFor="firstName">First Name</label>
//                     <input name="firstName" onChange={handleChange}  type="text" />
//                     <br/>
//                     <br/>
//                     <label htmlFor="lastName">Last Name</label>
//                     <input name="lastName" onChange={handleChange} type="text" />
//                     <br/>
//                     <br/>
//                     <label htmlFor="email">Email</label>
//                     <input name="email" onChange={handleChange} type="text" />
//                     <br/>
//                     <br/>
//                     <label htmlFor="gender">Cinsiyet</label>
//                     <br/>
//                     <br/>
//                     <span>Male</span>
//                     <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender==="male"} />

//                     <span>Famale</span>
//                     <input type="radio" name="gender" value="famale" onChange={handleChange}/>
//                     <br/>
//                     <br/>
//                     <span>Paython</span>
//                     <input type="checkbox" name="hobies" value="python"onChange={handleChange}/>
//                     <br/>
//                     <br/>
//                     <span>Javascript</span>
//                     <input type="checkbox" name="hobies" value="javascript" onChange={handleChange}/>
//                     <br/>
//                     <br/>
//                     <span>Flutter</span>
//                     <input type="checkbox" name="hobies" value="flutter" onChange={handleChange}/>
//                     <br/>
//                     <br/>

//                     <select name="country" onChange={handleChange}>
//                         <option value="">Select Country</option>
//                         <option value="Turkey">Turkey</option>
//                         <option value="Germany">Germany</option>
//                         <option value="France">France</option>
//                     </select>

//                     <br/>
//                     <br/>
//                     <button type="submit">Submit</button>
//                     {JSON.stringify(values)}
//                     </form>

//         </div>
//     )
// }

// export default App;

// import { Formik, useFormik } from 'formik'
// import './App.css'
// import SingUp from './components/SingUp'
// function App() {
 

//   return (
//     <div>
//         <SingUp />
//     </div>
//   )
// }

// export default App

// import {useState,useMemo} from 'react'
// import Header from './components/Header'


// // const data = {name : "Volkan"}  / Çözüm 1
// function App() {
//     const [number, setNumber] = useState(0)

//     const data = useMemo(() => {
//         return calculateObject()
//     },[number])

//   return (
//     <div>
//     <Header number={number < 5 ? 0 : number} data={data}/>
//     <h1>{number}</h1>
//     <button onClick={()=>setNumber(number+1)}>Clik</button>
//     </div>
//   )
// }


// function calculateObject(number) {
//     console.log("calculateObject")
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }

//     return {name : "Volkan",number}
// }

// export default App


import React from 'react'
import {ThemeProvider} from './components/ThemeContext'
import Container from './components/Container'
import './App.css'
import {UserProvider} from './components/UserContext';


function App() {
  return (
    <div className='App'>
    <ThemeProvider value="dark">
    <UserProvider>
    <Container />
    </UserProvider>
    </ThemeProvider>
    </div>
  )
}

export default App