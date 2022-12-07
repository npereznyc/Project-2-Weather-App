import React, {useEffect, useState} from 'react'

const SunriseSunset = () => {

    const[sun, setSun] = useState(null)
    const long = -87.65
    const lat = 41.85
    async function getSun(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=sunrise,sunset&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const sunData = await response.json()
            setSun(sunData)
            // console.log(sunData)
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getSun()
    }, [])
  return (
    sun
    ?
    <div>
        <div>
            Sunrise: {sun.daily.sunrise[0]}
        </div>
        <div>
            Sunset: {sun.daily.sunset[0]}
        </div>
    </div> : <p>Loading...</p>
  )
}

export default SunriseSunset