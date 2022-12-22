import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-11">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <h1>Lisbon</h1>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
          />
          <ul>
            <li>14:21 lim</li>
            <li>THU</li>
            <li>Dec 22</li>
          </ul>
        </div>
        <div className="col-4">
          <h2>18 ºC|F</h2>
          <h3>Partly cloudy</h3>
          <ul>
            <li>Humidity: 89%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
        <div className="col-4">Forecast</div>
      </div>
    </div>
  );
}
