//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'

    const Sidebar = (props) => {
    const[temp, setTemp] = useState(null)
    console.log(props.long)
    // const long = 45
    // const lat = -74

    // if ((props.long !== null) && (props.lat !== null)){
    //     getTemp()
    // }

    async function getTemp(props){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${props.long}&hourly=apparent_temperature&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const tempData = await response.json()
            setTemp(tempData)
            // console.log(tempData)
        }catch(err){
            console.log(err)
        }}

        //  console.log(props.latitude)
   
    
    useEffect(()=>{
        if ((props.long !== null) && (props.lat !== null)){
            getTemp()
        }
    }, [])

    let weatherCodeHashmap = new Map([
        [0, "Clear"],
        [1, "Partly Cloudy"],
        [2, "Partly Cloudy"],
        [3, "Partly Cloudy"],
        [45, "Foggy"],
        [48, "Foggy"],
        [51, "Drizzle"],
        [53, "Drizzle"],
        [55, "Drizzle"],
        [56, "Freezing Drizzle"],
        [57, "Freezing Drizzle"],
        [61, "Rain"],
        [63, "Rain"],
        [66, "Rain"],
        [66, "Freezing Rain"],
        [67, "Freezing Rain"],
        [71, "Snow"],
        [73, "Snow"],
        [75, "Snow"],
        [77, "Snow Grain"],
        [80, "Rain Showers"],
        [81, "Rain Showers"],
        [82, "Rain Showers"],
        [85, "Snow Showers"],
        [86, "Snow Showers"],
        [95, "Thunderstorms with Hail"],
        [96, "Thunderstorms with Hail"],
        [99, "Thunderstorms with Hail"],
    ])

    return (
        temp
        ?
        <div className="Sidebar">
            {weatherCodeHashmap.get(temp.current_weather.weathercode)}
            <div className="Date">Date & Time: {temp.current_weather.time}</div>
            <div className="CurrentTemperature">Current Temperature: {temp.current_weather.temperature}°F</div>
            <div className="FeelsLike">Feels Like: {temp.hourly.apparent_temperature[0]}°F</div>

            <div className="MaxAndMinTemp">High: {temp.daily.temperature_2m_max[0]}°F  Low: {temp.daily.temperature_2m_min[0]}°F</div>
        </div> 
        : <p>Loading...</p>
    )
}

export default Sidebar