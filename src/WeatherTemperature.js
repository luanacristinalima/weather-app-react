import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    props.handleUnitChange("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    props.handleUnitChange("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <h2 className="WeatherTemperature">
        {props.celsius}
        <span className="units">
          ºC|
          <a href="/" onClick={showFahrenheit} className="active">
            ºF
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2 className="WeatherTemperature">
        {Math.round(fahrenheit())}
        <span className="units">
          <a href="/" onClick={showCelsius} className="active">
            ºC
          </a>
          |ºF
        </span>
      </h2>
    );
  }
}
