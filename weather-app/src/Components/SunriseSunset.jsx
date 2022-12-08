import React, {useEffect, useState} from 'react'

const SunriseSunset = ({weatherData}) => {

    
  return (
    <div>
        <div>
            Sunrise: {weatherData?.daily?.sunrise[0]}
        </div>
        <div>
            Sunset: {weatherData?.daily?.sunset[0]}
        </div>
    </div> 
  )
}

export default SunriseSunset