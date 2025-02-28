// client/src/App.jsx
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  const connectToBackend = () => {
    fetch('/weather')
      .then((res) => res.json())
      .then((data) => setData(data.city));
  };

  return (
    <div className="App">

      <form>
      <h1>Weather in Detroit</h1>
      <input 
      placeholder='Insert City'
    />
      <button onClick={connectToBackend}>Submit</button>
      </form>
    
      
      {/* Render the newly fetched data inside data */}
     <Weather />
    </div>
  );
}

export default App;

// export default App
