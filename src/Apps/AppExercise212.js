import axios from "axios";
import { useState, useEffect } from "react";

const Country = (props) => {
  const country = props.country[0] ? props.country[0] : "";
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
        </div>
      ) : null}
    </div>
  );
};

const AppExercise211 = () => {
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      // .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        console.log("response.data", response.data);
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
    console.log({country});
    const arr = []
    arr[0] = country
    setFilteredCountries(arr)
  }

  return (
    <div>
      <div>
        find: <input onChange={onSearchChange} />
      </div>

      <div>
        {
        filteredCountries && filteredCountries.length > 1
          ? filteredCountries.map((country) => {
              return (
                <div key={country.name.common}>
                  <div style={{display: "inline-block"}}>{country.name.common}</div>
                  <button style={{display: "inline-block"}} onClick={() => showCountryDetails(country)}>show</button>
                </div>
              );
            })
          : <Country country={filteredCountries} /> || null}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default AppExercise211;
