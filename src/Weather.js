import { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setCity] = useState("Lisbon");
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("celsius");

  function showWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "t62d70oe1100008354b8807464af7fad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleUnitChange(unit) {
    setUnit(unit);
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
            <WeatherInfo
              data={weatherData}
              handleUnitChange={handleUnitChange}
            />
          </div>
          <div className="col-md-4">
            <Forecast city={weatherData.city} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
