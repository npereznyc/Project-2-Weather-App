//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'
const Sidebar = () => {
    const[temp, setTemp] = useState(null)

    async function getTemp(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-73.01&hourly=temperature_2m,apparent_temperature&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            // https://api.open-meteo.com/v1/forecast
            ?latitude={40.71}
            &longitude={-73.01}
            &hourly=temperature_2m,apparent_temperature
            &temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto
            const tempData = await response.json()
            // setTemp(tempData)
            console.log(tempData)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getTemp()
    }, [])

    return (
        <div className="Sidebar">
            <div className="Input">Input
            </div>
            <div className="Date">Date</div>
            <div className="CurrentTemperature">Current Temperature</div>
        </div>
    )
}

export default Sidebar