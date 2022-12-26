import "weather-icons/css/weather-icons.css";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function Forecast() {
  return (
    <div className="WeatherForecast">
      <div className="ForecastCard">
        <div className="row">
          <ul className="col-4">
            <li className="mb-3">27/12</li>
            <li>TUE</li>
          </ul>
          <div className="col-4">
            <WeatherIcon code="shower-rain-day" />
          </div>
          <ul className="col-4">
            <li className="mb-3">Sunny</li>
            <li>
              18°
              <span className="min-temp"> 12°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
