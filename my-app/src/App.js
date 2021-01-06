import React , {useState} from 'react';

const api = {
  key: "225b8616d108ba296b6e1a8baa485690",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = d => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
      <div className="search-box">
        <input
        className="search-bar"
        type="text"
        placeholder="Search"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="info-box">
            <div className="location">{weather.name},{weather.sys.country}</div>
            <div className="date-time">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temperature">{weather.main.temp} degree</div>
            <div className="weather-condition">{weather.weather[0].description}</div>
          </div>
        </div>
      ) : ('')}
      </main>
    </div>
  );
}

export default App;