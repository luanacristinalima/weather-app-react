import "weather-icons/css/weather-icons.css";
import "./weatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "wi-day-sunny",
    "clear-sky-night": "wi-night-clear",
    "few-clouds-day": "wi-day-cloudy",
    "few-clouds-night": "wi-night-alt-cloudy",
    "scattered-clouds-day": "wi-day-cloudy",
    "scattered-clouds-night": "wi-night-alt-cloudy",
    "broken-clouds-day": "wi-day-cloudy",
    "broken-clouds-night": "wi-night-alt-cloudy",
    "shower-rain-day": "wi-day-showers",
    "shower-rain-night": "wi-night-alt-showers",
    "rain-day": "wi-day-rain",
    "rain-night": "wi-night-alt-rain",
    "thunderstorm-day": "wi-day-thunderstorm",
    "thunderstorm-night": "wi-night-alt-thunderstorm",
    "snow-day": "wi-day-snow",
    "snow-night": "wi-night-alt-snow",
    "mist-day": "wi-day-fog",
    "mist-night": "wi-night-fog",
  };
  return (
    <div>
      <i className={`wi ${codeMapping[props.code]}`}></i>
    </div>
  );
}
