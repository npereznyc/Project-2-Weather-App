import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import {useEffect, useState} from 'react'

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const[tempData, setTempData] = useState([])

  // if ("geolocation" in navigator) {
  //   console.log("Available");
  // } else {
  //   console.log("Not Available");
  // }
  async function getLocation() {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    try{
      const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}1&hourly=apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
      const data = await response.json()
      setTempData(data)
      console.log(data)//DOES PRINT OUT DATA
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=> {
    getLocation()
  }, [parseFloat(lat), parseFloat(long)])

  console.log(tempData.current_weather.temperature)//DOES PRINT OUT DATA- at first it works but when we refresh it throws error
  return (
    tempData
    ?
    <div className="App">
      {/* <h1>{tempData.current_weather.weathercode}</h1> */}
      {/* <Sidebar 
       weatherData={tempData}
      /> */}
      {/* <Wind /> */}
      {/* <SunriseSunset /> */}
      {/* <WeeklyForecast /> */}

    </div> 
    : <p>Loading...</p>
  );
}

export default App;
