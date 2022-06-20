import React from 'react'
import './App.css'
import Weather from './components/Weather'
import {LocationProvider} from './components/Context'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
console.log(API_KEY)

function App() {
  return (
    <div>
    

      <LocationProvider>
        <Weather />
      </LocationProvider>
    </div>
  )
}

export default App