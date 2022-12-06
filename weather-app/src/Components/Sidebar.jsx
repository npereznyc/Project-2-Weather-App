//input field 
//button 
//date and time 
//api location from input field
//api temperature 
//api feels like 

import React, {useState, useEffect} from 'react'
const long = -73.01
const lat = 40.71
const Sidebar = () => {
const[temp, setTemp] = useState(null)

    async function getTemp(){
        try{
            const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            const tempData = await response.json()
            setTemp(tempData)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getTemp()
    }, [])
console.log(temp)
    return (
        temp
        ?
        <div className="Sidebar">
            <div className="Input">Input
            </div>
            <div className="Date">{temp.hourly.temperature_2m[0]}</div>
            <div className="CurrentTemperature">{temp.latitude}</div>
        </div> : <p>Loading...</p>
    )
}

export default Sidebar