// client/src/App.jsx
import React, { useState } from "react";
import Weather from './Weather';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }
  const connectToBackend = (event) => {
    event.preventDefault();
    fetch('/weather/:city')
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
    
      
      {/* Render the newly fetched data inside data */}
     <Weather />
    </div>
  );
}

export default App;
