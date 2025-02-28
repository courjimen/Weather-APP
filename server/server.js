import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
const app = express();
const apiKey = process.env.API_KEY;

//Set the port that you want the server to run on
const PORT = 5000;

//creates an endpoint for the route /api
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  console.log("city typed:", city);
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const cloudy = data.clouds;
    const weather  = data.weather;
    const windSpeed = data.wind.speed;

    res.json({
      description: description,
      temperature: temperature,
      cloudy: cloudy,
      city: data.name,
      weather: weather,
      windSpeed: windSpeed
    });

  } catch (err) {
    console.log(err);
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});