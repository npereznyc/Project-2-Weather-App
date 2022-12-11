import {useState} from 'react'
import sun from "./sun.png"
import moon from "./half-moon.png"

const SunriseSunset = ({weatherData}) => {
    const[state, setState] = useState(false)

    const toggle=()=>{
        setState(!state)
    }
    return (
        <div className="Sun">
            <div onMouseEnter={toggle} onMouseLeave={toggle} className="toggle">
                {state ? 
                <div className="Sunset">
                    <h2 className="SunWords">Sunset</h2> 
                    <img src={moon} alt="moonIcon" className='Icon'/>
                    <h2 className="SunTime">{weatherData?.daily?.sunset[0]}</h2>
                </div> : 
                <div className="Sunrise">
                    <h2 className="SunWords">Sunrise: </h2> 
                    <img src={sun} alt="sunIcon" className='Icon'/>
                    <h2 className="SunTime">{weatherData?.daily?.sunrise[0]}</h2>
                </div>
                }
            </div>
        </div> 
    )
}

export default SunriseSunset