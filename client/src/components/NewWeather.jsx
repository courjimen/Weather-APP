import React from 'react';

function NewWeather({city, description, cloudy, temperature, iconUrl, windSpeed, humidity}) {
  return (
    <>
     <h2>City: {city}</h2>
     {iconUrl && <img src={iconUrl} alt="weather icon"/>}
      <p>Description: {description}</p>
      <p>Temp: 🌡️ {temperature}</p>
      <p>Humidity: 💧 {humidity}</p>
      <p>Wind: 💨 {windSpeed} mph</p>
      <p>Clouds: ☁️ {cloudy.all}</p>
    </>
  )
}
export default NewWeather;
