//header
//similar to birds cards and how they were generated
//api for high 
//api for low 
//function for day 

import React, {useState, useEffect} from 'react'

    const WeeklyForecast = () => {
    const[forecast, setForecast] = useState(null)

    const long = -73.99
    const lat = 40.71
    
    async function getForecast(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const forecastData = await response.json()
            setForecast(forecastData)
            console.log(forecastData.daily.weathercode)
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getForecast()
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
    ]);

    return (
        forecast
        ?
        <section className="container">
            
            {forecast.daily.time.map((dailyTime, index)=> {
                return (
                    <div className="day" key={index}>
                        <p>{dailyTime}</p>
                    </div>
                )
            })}

            {forecast.daily.weathercode.map((dailyCode, index)=> {
                return (
                    <div className="code" key={index}>
                        {weatherCodeHashmap.get(dailyCode)}
                    </div>
                    
                )
                })}
                
        </section> 
        : <p>Loading...</p>
    )
}

export default WeeklyForecast