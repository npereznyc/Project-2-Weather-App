import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import {useState} from 'react'

function App() {
  // const initialState = {
  //   longitude: null,
  //   latitude: null,
  // }
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)

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

  function componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
  }
  componentDidMount()
// console.log(latitude)
   
  return (
    <div className="App">
      <h1>Project 2</h1>
      <div className="Input-Form">
                {/* <form onSubmit={handleSubmit}>
                    <label htmlFor="longitude">Longitude:</label>
                        <input
                        id="longitude"
                        type="number"
                        name="longitude"
                        value={formState.longitude}
                        onChange={handleChange}
                        />
                    <label htmlFor="latitude">Latitude:</label>
                        <input
                        id="latitude"
                        type="number"
                        name="latitude"
                        value={formState.latitude}
                        onChange={handleChange}
                        />
                    <button type="submit">Submit</button>
                </form> */}

      </div>
      <Sidebar 
        lat={latitude}
        long={longitude}
      />
      {/* <Wind /> */}
      {/* <SunriseSunset /> */}
      {/* <WeeklyForecast /> */}

    </div>
  );
}

export default App;
