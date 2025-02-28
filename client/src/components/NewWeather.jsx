import React from 'react';

function NewWeather({city, description, cloudy, temperature}) {
  return (
    <>
     <h2>City: {city}</h2>
      <p>Description: {description}</p>
      <p>Clouds: {cloudy.all}</p>
      <p>Temp: {temperature}</p>
    </>
  )
}
export default NewWeather;
