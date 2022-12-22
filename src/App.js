import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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
