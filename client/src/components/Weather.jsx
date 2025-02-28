import React from 'react';

function Weather({city, description, cloudy, temp}) {
  return (
    <>
     <h2>City: {city}</h2>
      <p>Description: {description}</p>
      <p>Clouds: {cloudy.all}</p>
      <p>Temp: {temperature}</p>
    </>
  )
}
export default Weather;
