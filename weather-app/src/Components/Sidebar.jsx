//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'

    const Sidebar = ({weatherData}) => {
    // console.log(weatherData)
    
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
    // console.log(weatherData.current_weather.temperature)
    if(!weatherData){
        return (
            <div>Loading...</div>
        )
    }
    if(weatherData){
        return (
                <div>
                    <h1>Current Temperature: {weatherData?.current_weather?.temperature}</h1>
                        <div className="Sidebar">
                        {weatherCodeHashmap.get(weatherData?.current_weather?.weathercode)}
                        <div className="Date">Date & Time: {weatherData?.current_weather?.time}</div>
                        <div className="CurrentTemperature">Current Temperature: {weatherData?.current_weather?.temperature}°F</div>
                        {/* <div className="FeelsLike">Feels Like: {weatherData?.hourly?.apparent_temperature[0]}°F</div> */}
                        <div className="MaxAndMinTemp">High: {weatherData?.daily?.temperature_2m_max[0]}°F  Low: {weatherData?.daily?.temperature_2m_min[0]}°F</div>
                    </div> 
                </div>
            
            )

    }
    
}

export default Sidebar