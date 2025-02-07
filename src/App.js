import axios from 'axios';
import React, { useState } from 'react';
import './index.css';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5c20235375877b9bde54c936a02cc98b`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((error) => {
        alert(error.response.data.message)
      })
      setLocation('');
    }
  }
  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type='text' />
        <p style={{ padding: "5px" }}>The World's Weather in Your Hands</p>
      </div>

      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name} </p>
          </div>
          <div className='temp'>
            {data.main ? <h1> {data.main.temp} °C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p> {data.weather[0].main}</p> : null}
          </div>

        </div>
        {data.name != undefined &&
          <div className='bottom'>

            <div className='feels'>
              {data.main ? <p className='bold'> {data.main.feels_like}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'> {data.main.humidity} %</p> : null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind ? <p className='bold'> {data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>

          </div>}
      </div>
    </div>
  );
}

export default App;
// npm i axios
// The World’s Weather in Your Hands"
