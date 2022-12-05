- A **description of the project** you'll be building with the objective described in non-technical language:
We are building a weather app that allows the user to input their location and select the weather details they wish to view (temprature, precipation, wind, etc.). The app will then display the current weather along with the details they desire.


- Hand-drawn or digitally created **wireframes** outlining the key views within your app.


- A collection of **user stories representing project MVP**. You may include additional information about post-MVP plans for your application.
I open the app because I want to check the weather and I see an input field that asks for my location and a submit button. I enter my city and state and click submit. On the screen appears my local weather, including the current temperature, the high and low temperatures for the day, and a visual representation of the week's temperature via a graph. On the right-hand side is a drop-down menu with additional weather details. When I click on percipitation, the menu drops down and I see the rain and/or snow forecast for the day. When I click on wind, I see the wind forecast for the day. When I click on sunrise/sunset, I see the sunrise and sunset times for the day.

- A link to the **API** you plan to use and an **example of the data response** you will use.
https://open-meteo.com/en/docs
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


- A **visual of your component hierarchy**. Think of the the critical states of your project and identify the data that each component will need. Optionally, indicate which components need state and which components will receive props.


- If you plan on incorporating a component or any other third-party library, include a link in your proposal.