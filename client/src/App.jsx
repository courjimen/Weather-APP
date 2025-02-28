// client/src/App.jsx
import React, { useState } from "react";
import Weather from './Weather';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }
  const connectToBackend = () => {
    fetch('/weather/:city')
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="App">

      <form>
      <h1>Weather in Detroit</h1>
      <input 
      type = "text"
      placeholder='Insert City'
      value={city}
      onChange={handleInputChange}
    />
      <button onClick={connectToBackend}>Submit</button>
      </form>
    
      
      {/* Render the newly fetched data inside data */}
     <Weather />
    </div>
  );
}

export default App;
