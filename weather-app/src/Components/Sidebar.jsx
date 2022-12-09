import cloudy from './cloudy.png'

const Sidebar = ({weatherData}) => {
    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let min = today.getMinutes() 
    let session = "AM"
        if (hour === 0){
            hour = 12
        }
        if (hour > 12){
            hour = hour-12
            session = "PM"
        }
        if (min < 10){
            min = "0" + min
        }
    let date = (hour + ":" + min + session)

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
    if(!weatherData){
        return (
            <div>Loading...</div>
        )
    }
    if(weatherData){
        return (
            <div className="Sidebar">
                <div>
                    
                    <div className="Date">
                        <h2>{date}</h2></div>

                    <div className="Condition">
                        <img src={cloudy} alt="cloudy" className="Icon"/>
                        <h2>{weatherCodeHashmap.get(weatherData?.current_weather?.weathercode)}</h2></div>
                    <div className="CurrentTemperature">
                        <h2>Current Temperature: {weatherData?.current_weather?.temperature}°F</h2></div>
                    <div className="FeelsLike">
                        <h2>Feels Like: {weatherData?.hourly?.apparent_temperature[0]}°F</h2></div>
                    <div className="MaxAndMinTemp">
                        <h2>High: {weatherData?.daily?.temperature_2m_max[0]}°F  Low: {weatherData?.daily?.temperature_2m_min[0]}°F</h2>
                    </div>
                </div> 
            </div>
            
        )

    }
    
}

export default Sidebar