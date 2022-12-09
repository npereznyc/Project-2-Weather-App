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
    ])}
    
    if(!weatherData){
        return (
            <div>Loading...</div>
        )
    }
    if(weatherData){
        return (
        <div>
            <div className="Cast0">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast1">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast2">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast3">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast4">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast5">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast6">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
        </div>
  )
}

export default ExtendedCast