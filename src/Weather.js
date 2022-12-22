import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-md-8 current-city-weather">
          <form>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <div className="row mt-5 ">
            <div className="col-6">
              <h1>Lisbon</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-5 mt-5">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly cloudy"
              />
            </div>
            <div className="col-md-6 current-weather">
              <h2>
                18
                <span className="units"> ºC|F</span>
              </h2>
              <h3>Partly cloudy</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 day-data">
              <ul>
                <li>14:21 pm</li>
                <li className="week-day mt-3 mb-3">THU</li>
                <li>Dec 22</li>
              </ul>
            </div>
            <div className="col-md-6 mt-4">
              <ul>
                <li>Humidity: 89%</li>
                <li>Wind: 14 km/h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4"> Forecast </div>
      </div>
    </div>
  );
}
