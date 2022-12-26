import React, { useEffect, useState } from "react";
import moment from "moment";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);

  useEffect(() => {
    if (props.unit === "celsius") {
      setMaxTemp(Math.round(props.data.temperature.maximum));
      setMinTemp(Math.round(props.data.temperature.minimum));
    } else {
      setMaxTemp(Math.round((props.data.temperature.maximum * 9) / 5 + 32));
      setMinTemp(Math.round((props.data.temperature.minimum * 9) / 5 + 32));
    }
  }, [
    props.unit,
    props.data.temperature.maximum,
    props.data.temperature.minimum,
  ]);

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
        <li className="mb-3" title={description()}>
          {description()}
        </li>
        <li>
          {maxTemp}º<span className="min-temp">{minTemp}º</span>
        </li>
      </ul>
    </div>
  );
}
