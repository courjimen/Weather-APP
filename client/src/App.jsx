// client/src/App.jsx
import React, { useState } from "react";
import NewWeather from './components/NewWeather'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  const connectToBackend = (event) => {
    event.preventDefault();
    console.log("city sent:", city)
    fetch(`/weather/${city}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
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
      
     {data && <NewWeather {...data}/>}

    </div>
  );
}

export default App;
