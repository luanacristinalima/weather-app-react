import moment from "moment";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function description() {
    let description = props.data.condition.description;
    return `${description}`;
  }

  let date = new Date(props.data.time * 1000);

  return (
    <div className="row">
      <ul className="col-4">
        <li className="mb-3">{moment(date).format("MMM D")}</li>
        <li>{moment(props.data.date).format("ddd")}</li>
      </ul>
      <div className="col-4">
        <WeatherIcon code={props.data.condition.icon} />
      </div>
      <ul className="col-4">
        <li className="mb-3">{description()}</li>
        <li>
          {maxTemperature()}
          <span className="min-temp">{minTemperature()}</span>
        </li>
      </ul>
    </div>
  );
}
