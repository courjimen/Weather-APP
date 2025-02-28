import React from 'react';

function NewWeather({city, description, cloudy, temperature, iconUrl}) {
  return (
    <>
     <h2>City: {city}</h2>
     {iconUrl && <img src={iconUrl} alt="weather icon"/>}
      <p>Description: {description}</p>
      <p>Clouds: {cloudy.all}</p>
      <p>Temp: {temperature}</p>
    </>
  )
}
export default NewWeather;
