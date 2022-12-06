//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'

    const Sidebar = () => {
    const[temp, setTemp] = useState(null)

    const long = -87.65
    const lat = 41.85
    async function getTemp(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=apparent_temperature&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const tempData = await response.json()
            setTemp(tempData)
            console.log(tempData)
        }catch(err){
            console.log(err)
        }
    }
    
    
    useEffect(()=>{
        getTemp()
    }, [])


    return (
        temp
        ?
        <div className="Sidebar">
            <div className="Input">
                {/* <input value={formState.longitude} id="longitude" className="longitude" onChange={handleChange}></input>
                <input value={formState.latitude}id="latitude" className="latitude" onChange={handleChange}></input> */}
                {/* <button type="submit">Submit</button> */}

            </div>
            {temp.current_weather.weathercode}
            <div className="Date">Date & Time: {temp.current_weather.time}</div>
            <div className="CurrentTemperature">Current Temperature: {temp.current_weather.temperature}°F</div>
        </div> : <p>Loading...</p>
    )
}

export default Sidebar