import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import {useState} from 'react'

function App() {
  const initialState = {
    longitude: "",
    latitude: "",
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
    // console.log(
    //     e.target.value,
    //     e.target.name
    //   )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formState.latitude)
    // console.log(formState.longitude)
  }
  console.log("The longitude is " + formState.longitude)
  console.log("The latitude is " + formState.latitude)
   
  return (
    <div className="App">
      <h1>Project 2</h1>
      <div className="Input">
                <form onSubmit={handleSubmit}>
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
                </form>

      </div>
      <Sidebar 
      latitude={formState.latitude}
      longitude={formState.longitude}/>
      {/* <Precipitation /> */}
      <Wind />
      <SunriseSunset />
      <WeeklyForecast />

    </div>
  );
}

export default App;
