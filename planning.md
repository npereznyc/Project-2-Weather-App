## Description of the project:
We are building a weather app that allows the user to input their location and select the weather details they wish to view (temprature, precipation, wind, etc.). The app will then display the current weather along with the details they desire.


## App Wireframe:
![wireframe](./assets/Project%202%20Weather%20App%20(1).jpg)


## User Story:
I open the app because I want to check the weather and I see an input field that asks for my location and a search button. I enter my city and state and click serach. On the left of the screen appears the day and time, my location, my local weather, including the current temperature, and what the temperature feels like. the right of the current weather, at the top of the screen, is a weekly forecast with the high and low temperatures for the next six days. Below that are other weather highlights, including precipitation for the day, the wind conditions, and the sunrise and sunset times.


## Link to the API we plan to use & example of the data response:
- API Link: https://open-meteo.com/en/docs
- Data example:
{
"latitude": 40.710335,
"longitude": -73.99307,
"generationtime_ms": 1.314997673034668,
"utc_offset_seconds": -18000,
"timezone": "America/New_York",
"timezone_abbreviation": "EST",
"elevation": 27,
"hourly_units": {
"time": "iso8601",
"temperature_2m": "°F",
"apparent_temperature": "°F",
"rain": "inch",
"showers": "inch",
"snowfall": "cm"
},
"hourly": {},
"daily_units": {
"time": "iso8601",
"sunrise": "iso8601",
"sunset": "iso8601"
},
"daily": {}
}


## Visual of our component hierarchy: 
![wireframe with components](./assets/Project%202%20Weather%20App%20(components).jpg)
- Red: App.js, parent component.
- Blue Sidebar: Input field, Day, Time, City (from API), Temperature (from API), Apparent Temperature (from API). This component needs state.
- Blue Weekly Forecast: Six-day outlook (from API), high and low temperatures (from API). This component needs state.
- Blue Today's Highlights: Will render the Precipitation, Wind, and Sunrise/Sunset components.
- Aqua Precipitation: Precipitation data (from API). This component needs state.
- Aqua Wind: Wind data (from API). This component needs state.
- Aqua Sunrise/set: Sunrise/Sunset data (from API). This component needs state.
