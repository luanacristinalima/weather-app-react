import moment from "moment";

export default function WeatherDate(props) {
  return (
    <ul className="day-data">
      <li>{moment(props.date).format("hh:mm a")}</li>
      <li className="week-day mt-3 mb-3 text-uppercase">
        {moment(props.date).format("ddd")}
      </li>
      <li>{moment(props.date).format("MMM D")}</li>
    </ul>
  );
}
