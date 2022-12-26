import React, { useState, useEffect } from "react";
import "weather-icons/css/weather-icons.css";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "t62d70oe1100008354b8807464af7fad";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6 && index > 0) {
            return (
              <div className="ForecastCard" key={index}>
                <WeatherForecastDay data={dailyForecast} unit={props.unit} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
