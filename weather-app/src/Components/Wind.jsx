import React, {useEffect, useState} from 'react'

const Wind = () => {
    const[wind, setWind] = useState(null)
    const long = -87.65
    const lat = 41.85
    async function getWind(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=windspeed_10m_max,winddirection_10m_dominant&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const windData = await response.json()
            setWind(windData)
            console.log(windData)
        }catch(err){
            console.log(err)
        }
    }
    
        useEffect(()=>{
        getWind()
    }, [])

  return (
    wind
    ?
    <div>
        <div>
            Wind Speed: {wind.current_weather.windspeed}mph at {wind.current_weather.winddirection}°

        </div>
    </div> 
    : <p>Loading ...</p>
  )
}

export default Wind