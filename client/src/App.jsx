// client/src/App.jsx
import React, { useEffect, useState } from "react";
import NewWeather from './components/NewWeather'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [iconUrl, setIconUrl] = useState(null)

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  const connectToBackend = (event) => {
    event.preventDefault();
    // handle errors
    fetch(`/weather/${city}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  // added for icon visibility
  useEffect(() => {
    if (data && data.weather  && data.weather.length > 0) {
      const iconCode = data.weather[0].icon;
      const url = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      setIconUrl(url);
    } else {
      setIconUrl(null);
    }
  }, [data]); //run effect when data changes

  return (
    <div className="App">

      <form onSubmit={connectToBackend}>
      <h1>Weather in {city || "..."}</h1>
      <input 
      type = "text"
      placeholder='Insert City'
      value={city}
      onChange={handleInputChange}
    />
      <button type="submit">Submit</button>
      </form>
      
     {data && <NewWeather {...data} iconUrl={iconUrl}/>}

    </div>
  );
}

export default App;
