import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card-wrapper">
          <div className="row">
            <div className="col">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter a city"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
          <header>
            <h1>
              <i className="fa-solid fa-location-dot"></i>
              <span>Castelo Branco</span>
            </h1>
            <h2>Sun, Dec 18, 10:36</h2>
          </header>
          <div className="row">
            <div className="col-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
                className="weather-icon"
              />
            </div>
            <div className="col-8 weather-now">
              <h3>Broken Clouds</h3>
              <h4>
                <span>10</span>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>
                  |<a href="/">°F</a>
                </span>
              </h4>
            </div>
            <div className="col-2">
              <p className="weather-parameters">Humidity:</p>
              <p>
                <i className="fa-solid fa-droplet icons"></i>
                <span>78%</span>
              </p>
              <p className="weather-parameters">Wind:</p>
              <p>
                <i className="fa-solid fa-wind icons"></i>
                <span>1.89km/h</span>
              </p>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/luanacristinalima/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourse code
          </a>
          , by Luana Lima
        </footer>
      </div>
    </div>
  );
}
