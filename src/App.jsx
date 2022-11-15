import { useState } from 'react';

import './App.css';
import fetchWeather from './api/fetchApi';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
      setQuery('');
    }
  }

  return (
    <div className="App">
      <div className="input">
        <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}></input>

      </div>

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span className="black">{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <p className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>

          </p>
          <p className="icon-weather">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </p>
          <p className="black" id="description">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
