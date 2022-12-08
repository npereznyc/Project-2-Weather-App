import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import {useEffect, useState} from 'react'

function App() {
  // const initialState = {
  //   longitude: null,
  //   latitude: null,
  // }
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const[tempData, setTempData] = useState(null)

  // const handleChange = (e) => {
  //   setFormState({ ...formState, [e.target.name]: e.target.value })
  //   // console.log(
  //   //     e.target.value,
  //   //     e.target.name
  //   //   )
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  // if ("geolocation" in navigator) {
  //   console.log("Available");
  // } else {
  //   console.log("Not Available");
  // }
  async function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
    try{
      const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}1&hourly=apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
      const data = await response.json()
      setTempData(data)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=> {
    getLocation()
  }, [lat, long])

  // console.log(lat)
  // console.log(long)
   
  return (
    <div className="App">
      <h1>Project 2</h1>
      <Sidebar 
       weatherData={tempData}
      />
      {/* <Wind /> */}
      {/* <SunriseSunset /> */}
      {/* <WeeklyForecast /> */}

    </div>
  );
}

export default App;
