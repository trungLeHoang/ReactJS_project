import React from 'react';

function App() {
  return (
    <div className="app">
      <main>
      <div className="search-box">
        <input
        className="search-bar"
        type="text"
        placeholder="Search"
        />
      </div>
      <div className="info-box">
        <div className="location">Pleiku</div>
        <div className="date-time">9 am December 31st</div>
      </div>
      <div className="weather-box">
        <div className="temperature">27 degree</div>
        <div className="weather-condition">cloudy</div>
      </div>
      </main>
    </div>
  );
}

export default App;
