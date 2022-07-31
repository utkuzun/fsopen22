import { useEffect, useState } from "react"
import axios from "axios"


const Country = ({ country, filtered }) => {
  const [show, setShow] = useState(false)
  const [weather, setWeather] = useState({})


  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    axios.get(urlWeather).then((response) => setWeather(response.data))
  }, [country])

  const {
    name: { common },
    capital,
    area,
    languages,
    flags: { png },
  } = country
  
  return (
    <>
      <h3>{common}</h3>
      <button onClick={() => setShow(!show)}>{!show ? 'show' : 'hide'}</button>
      {(show) && (
        <div>
          <p>capital {capital[0]}</p>
          <p>area {area}</p>

          <h4>languages:</h4>
          <ul>
            {Object.values(languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <img src={png} alt='flag' />
          <div>
            <h4>Weather in {capital}</h4>
            <p>temperature {weather.main.temp} Celcius</p>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt='weather symbol'
            />
            <p>wind {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Country