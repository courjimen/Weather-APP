import React from 'react'

function Weather({city, description, cloudy, temp}) {
  return (
    <>
     <h2>City: data.{city}</h2>
      <p>Description: data.{description}</p>
      <p>Clouds: data.{cloudy.all}</p>
      <p>Temp: data.{temperature}</p>
    </>
  )
}
export default Weather 
