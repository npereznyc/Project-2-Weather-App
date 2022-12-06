import React, {useEffect, useState} from 'react'

const Wind = () => {
    const[wind, setWind] = useState(null)
    const long = -87.65
    const lat = 41.85
    async function getWind(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const windData = await response.json()
            setWind(windData)
        }catch(err){
            console.log(err)
        }
    }
    
    
    // console.log(tempData.current_weather.weathercode)
    useEffect(()=>{
        getWind()
    }, [])

  return (
    <div>Wind</div>
  )
}

export default Wind