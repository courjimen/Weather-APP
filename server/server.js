import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();

//Set the port that you want the server to run on
const PORT = 5000;

//creates an endpoint for the route /api
app.get('/weather', (req, res) => {
  const city = req.query.Detroit;
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: 'city',
    appid: apiKey,
    units: "imperial",
  });
  
const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    res.send({data});
  })
  .catch((err) => {
    console.log(err);
  })
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});