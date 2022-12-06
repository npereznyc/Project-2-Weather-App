// import React, {useEffect, useState} from 'react'

// const Precipitation = () => {
//     const long = -87.65
//     const lat = 41.85
//     async function getTemp(){
//         try{
//             const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
//             const tempData = await response.json()
//             setTemp(tempData)
//         }catch(err){
//             console.log(err)
//         }
//     }
//     useEffect(()=>{
//         getTemp()
//     }, [])

//   return (
//     <div>Precipitation</div>
//   )
// }

// export default Precipitation