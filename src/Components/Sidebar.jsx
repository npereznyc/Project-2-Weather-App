import LiveClock from "react-live-clock";

const Sidebar = ({weatherData}) => {
    let today = new Date()
    let day = today.getDay();
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 

    //defines weathercode 
  let weatherCodeHashmap = new Map([
        [0, "🌤 Clear"], 
        [1, "🌥 Partly Cloudy"],  
        [2, "🌥 Partly Cloudy"],
        [3, "🌥 Partly Cloudy"], 
        [45, "🌫 Foggy"],
        [48, "🌫 Foggy"],  
        [51, "☔ Drizzle"],
        [53, "☔ Drizzle"], 
        [55, "☔ Drizzle"],
        [56, "☔ Freezing Drizzle"],
        [57, "☔ Freezing Drizzle"],
        [61, "🌧 Rain"],  
        [63, "🌧 Rain"],
        [66, "🌧 Rain"],
        [66, "🌧 Freezing Rain"],
        [67, "🌧 Freezing Rain"],
        [71, "❄ Snow"], 
        [73, "❄ Snow"],
        [75, "❄ Snow"],
        [77, "❄ Snow Grain"],
        [80, "☔ Rain Showers"],  
        [81, "☔ Rain Showers"], 
        [82, "☔ Rain Showers"],
        [85, "❄ Snow Showers"],
        [86, "❄ Snow Showers"],
        [95, "⛈ Thunderstorms with Hail"],
        [96, "⛈ Thunderstorms with Hail"],
        [99, "⛈ Thunderstorms with Hail"],
    ])
    
    //waits for weather data from location 
    if(!weatherData){
        return (
            <div>Loading...</div>
        )
    }
    if(weatherData && weatherData.current_weather && weatherData.hourly && weatherData.daily){
        return (
            <div className="Sidebar">
                <div>
                    <div className="Date">
                        <h3>{dayList[day]}</h3>
                    </div>
                    <div className="Date">
                        <LiveClock className="Date"  format={'h:mma'}  ticking={true}/>
                    </div>
                    <div className="Condition">
                        <h2>{weatherCodeHashmap.get(weatherData.current_weather.weathercode)}</h2></div>
                    <div className="CurrentTemperature">
                        <h2>Current Temperature: {weatherData.current_weather.temperature}°F</h2></div>
                    <div className="FeelsLike">
                        <h2>Feels Like: {weatherData.hourly.apparent_temperature[0]}°F</h2></div>
                    <div className="MaxAndMinTemp">
                        <h2>High: {weatherData.daily.temperature_2m_max[0]}°F  Low: {weatherData?.daily?.temperature_2m_min[0]}°F</h2>
                    </div>
                </div> 
            </div>
            
        )

    }
    
}

export default Sidebar