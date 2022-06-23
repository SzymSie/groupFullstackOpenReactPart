import axios from "axios";
import { useState, useEffect } from "react";

const Country = (props) => {
  // const country = props.country[0] ? props.country[0] : "";
  const country = props.country[0] ?? "";
  const [weather, setWeather] = useState();
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  const FahrenheitToCelsius = (tempFahrenheit) => {
    console.log("checking");
    return (parseInt(tempFahrenheit) - 273.15).toFixed(1)
 }

  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name.common}</h1>
          <div>capital: {country.capital}</div>
          <div>area: {country.area}</div>
          <h2>languages:</h2>
          <ul>
            {Object.entries(country.languages).map((item) => (
              <li key={item[0]}>{item[1]}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
          {weather && (
            <div>
              <h2>Weather in {country.capital}</h2>
              {/* <div>Temp: {(parseInt(weather.main.temp) - 273.15).toFixed(1)} Celsius</div> */}
              <div> {FahrenheitToCelsius(weather.main.temp)} </div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
              <div>wind: {weather.wind.speed} m/s</div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

const AppExercise214 = () => {
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      // .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const onSearchChange = (event) => {
    const filtered = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    if (filtered.length <= 10) {
      setFilteredCountries(filtered);
      setMessage("");
    } else {
      setMessage("Be more specific");
      setFilteredCountries([]);
    }
  };

  const showCountryDetails = (country) => {
    setFilteredCountries([country]);
    // const arr = [];
    // arr[0] = country;
    // setFilteredCountries(arr);
  };

  const filterStuff = () => {
    return filteredCountries.map((country) => {
      return (
        <div key={country.name.common}>
          <div style={{ display: "inline-block" }}>{country.name.common}</div>
          <button
            style={{ display: "inline-block" }}
            onClick={() => showCountryDetails(country)}
          >
            show
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        find: <input onChange={onSearchChange} />
      </div>
      <div>
        {filteredCountries.length > 1 && filterStuff()}
        {filteredCountries.length === 1 && (
          <Country country={filteredCountries} />
        )}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default AppExercise214;
