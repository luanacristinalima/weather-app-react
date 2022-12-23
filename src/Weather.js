import { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherDate from "./WeatherDate";

export default function Weather() {
  const [city, setCity] = useState("Lisbon");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "t62d70oe1100008354b8807464af7fad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-8 current-city-weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            <div className="row mt-5 ">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-5 mt-5">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="col-md-6 current-weather">
                <h2>
                  {Math.round(weatherData.temperature)}
                  <span className="units"> ºC|F</span>
                </h2>
                <h3 className="text-capitalize">{weatherData.description}</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <WeatherDate date={weatherData.date} />
              </div>
              <div className="col-md-6 mt-4">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4"> Forecast </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
