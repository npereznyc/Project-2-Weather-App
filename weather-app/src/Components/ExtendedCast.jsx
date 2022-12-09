import React from 'react'

const ExtendedCast = ({weatherData}) => {
    if(!weatherData){
        return (
            <div>Loading...</div>
        )
    }
    if(weatherData){
        return (
        <div>
            <div className="Cast0">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast1">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast2">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast3">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast4">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast5">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>
            <div className="Cast6">
                <div>Date</div>
                <div>Weathercode</div>
                <div>Max and Min Temperature</div>
                <div>Sunrise and Sunset</div>
                <div>Wind?</div>
            </div>



        </div>
  )
}

export default ExtendedCast