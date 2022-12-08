import {useState} from 'react'

const SunriseSunset = ({weatherData}) => {
    const[state, setState] = useState(false)

    const toggle=()=>{
        setState(!state)
    }
    return (
        <div className="Sun">
                <div onMouseEnter={toggle} onMouseLeave={toggle} className="toggle">
                    {state ? <h1>Sunset: {weatherData?.daily?.sunset[0]}</h1> : 
                    <h1>Sunrise: {weatherData?.daily?.sunrise[0]}</h1>}
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