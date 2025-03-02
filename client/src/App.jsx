// client/src/App.jsx
import React, { useEffect, useState } from "react";
import NewWeather from './components/NewWeather'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [iconUrl, setIconUrl] = useState(null);
  const [err, setErr] = useState(null);
  
  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  const connectToBackend = (event) => {
    event.preventDefault();
    // handle errors
    fetch(`/weather/${city}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setErr("Invalid city. Try again."))
  };

  // console.log("data: ", data);
  // added for icon visibility
  useEffect(() => {
    if (data && data.weather && data.weather.length > 0) {
      const iconCode = data.weather[0].icon;
      const url = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      setIconUrl(url);
    } else {
      setIconUrl(null);
    }
  }, [data, err]); //run effect when data changes
  
  console.log({data});
  return (
    <div className="App">

      <form onSubmit={connectToBackend}>
        <h1>Weather in {city || "..."}</h1>
        <input
          type="text"
          placeholder='Insert City'
          value={city}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {data && data.city && <NewWeather {...data} iconUrl={iconUrl} />}
      { err && <div>{err}</div>}

    </div>
  );
}

export default App;
