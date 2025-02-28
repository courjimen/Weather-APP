import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();

//Set the port that you want the server to run on
const PORT = 5000;

//creates an endpoint for the route /api
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
try {
  const response = await fetch(url);

  const data = await response.json();
  res.json(data);
  } catch(err) {
    console.log(err);
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});