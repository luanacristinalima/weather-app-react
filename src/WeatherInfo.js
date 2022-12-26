import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5 ">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mt-5">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-md-6 current-weather">
          <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <WeatherDate date={props.data.date} />
        </div>
        <div className="col-md-6 mt-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
