import { useEffect, useState } from "react";
import React from 'react'
const images = require.context('../assets', false, /\.(png|jpe?g|svg)$/)

  // Hava koşullarını api icon ile img dosyasındaki verilerle eşleştirme
function Weather(){
const [weather,setWeather] = useState([]) 

  useEffect(() => { 
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/samsun?unitGroup=metric&include=events%2Cdays%2Ccurrent%2Chours%2Calerts&key=47VYVQ6ZVS95HUR9C9VHUQ3WB&contentType=json')
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?iconSet=icons1&aggregateHours=24&combinationMethod=aggregate&shortColumnNames=true&contentType=json&unitGroup=metric&locationMode=single&locations=49.1791,-122.3161&forecastDays=7&key=47VYVQ6ZVS95HUR9C9VHUQ3WB')
    .then(response => response.json())
    .then(data => setWeather(data))
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, []);
  
  
  return (
    <div className="App">

      
      <h1>Weather in London</h1>
      <p>The current temperature is {weather.resolvedAddress} &deg;C</p>
      <p>The current temperature is {weather.description} &deg;C</p>
      
      {/* günleri dön array iç.indeki json datası */}

      {weather.days && weather.days.map(day => (
        <div>
          <ul key={weather.queryCost}>
            <li>{day.datetime}</li>
            <li>{day.description}</li>
              <li>
                
              </li>
              <img src= {images(`./${day.icon}.png`)} alt='weather' />
          </ul>
        {/* İcon için img dosyasındaki isimlerle apideki icon isimlerini eşleştirme */}
        </div>
      ))}
    </div>
  );
}

export default Weather;