import WeatherDate from "./WeatherDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5 ">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-5 mt-5">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-md-6 current-weather">
          <h2>
            {Math.round(props.data.temperature)}
            <span className="units"> ºC|F</span>
          </h2>
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
