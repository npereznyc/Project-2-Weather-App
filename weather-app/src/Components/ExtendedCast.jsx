import React from 'react'

const ExtendedCast = ({weatherData}) => {
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

    // if(!weatherData){
    //     return (
    //         <div>Loading...</div>
    //     )
    // }
    if(weatherData){
        return (
        <div>
            <div className="Cast0">
                <h3>{weatherData?.daily?.time[0]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[0])}</h4>
                <h4>High: {weatherData?.daily?.temperature_2m_max[0]}°F  Low: {weatherData?.daily?.temperature_2m_min[0]}°F</h4>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast1">
                <h3>{weatherData?.daily?.time[1]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[1])}</h4>
                <h2>High: {weatherData?.daily?.temperature_2m_max[1]}°F  Low: {weatherData?.daily?.temperature_2m_min[1]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast2">
                <h3>{weatherData?.daily?.time[2]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[2])}</h4>
                <h2>High: {weatherData?.daily?.temperature_2m_max[2]}°F  Low: {weatherData?.daily?.temperature_2m_min[2]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast3">
                <h3>{weatherData?.daily?.time[3]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[3])}</h4>
                <h2>High: {weatherData?.daily?.temperature_2m_max[3]}°F  Low: {weatherData?.daily?.temperature_2m_min[3]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast4">
                <h3>{weatherData?.daily?.time[4]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[4])}</h4>
                <h2>High: {weatherData?.daily?.temperature_2m_max[4]}°F  Low: {weatherData?.daily?.temperature_2m_min[4]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast5">
                <h3>{weatherData?.daily?.time[5]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[5])}</h4>
                <<h2>High: {weatherData?.daily?.temperature_2m_max[5]}°F  Low: {weatherData?.daily?.temperature_2m_min[5]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast6">
            <h3>{weatherData?.daily?.time[6]}</h3>
                <h4>{weatherCodeHashmap.get(weatherData?.daily?.weathercode[6])}</h4>
                <h2>High: {weatherData?.daily?.temperature_2m_max[6]}°F  Low: {weatherData?.daily?.temperature_2m_min[6]}°F</h2>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
        </div>
  )
}
}
export default ExtendedCast