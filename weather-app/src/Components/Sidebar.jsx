//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'
const long = -73.01
const lat = 40.71
const Sidebar = () => {
const[temp, setTemp] = useState(null)

    async function getTemp(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const tempData = await response.json()
            setTemp(tempData)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getTemp()
    }, [])
console.log(temp)
    return (
        temp
        ?
        <div className="Sidebar">
            <div className="Input">
                <input className="longitude"></input>
                <input className="latitude"></input>
                <button type="submit">Submit</button>

            </div>
            <div className="Date">Date & Time: {temp.current_weather.time}</div>
            <div className="CurrentTemperature">Current Temperature: {temp.current_weather.temperature}</div>
        </div> : <p>Loading...</p>
    )
}

export default Sidebar