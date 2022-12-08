import {useState} from 'react'

const SunriseSunset = ({weatherData}) => {
    const[state, setState] = useState(false)

    const toggle=()=>{
        setState(!state)
    }
    return (
        <div className="Sun">
                <div onMouseEnter={toggle} onMouseLeave={toggle} className="toggle">
                    {state ? 
                    <div className="Sunrise">
                        <h2>Sunrise:</h2> 
                        <h3>{weatherData?.daily?.sunrise[0]}</h3>
                    </div> : 
                    <div className="Sunset">
                        <h2>Sunset:</h2> 
                        <h3>{weatherData?.daily?.sunset[0]}</h3>
                    </div>}
                </div>


            {/* <div className="SunriseFront">
                Sunrise: {weatherData?.daily?.sunrise[0]}
            </div>
            <div className="Sunset">
                Sunset: {weatherData?.daily?.sunset[0]}
            </div> */}
        </div> 
  )
}

export default SunriseSunset