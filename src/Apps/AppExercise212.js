import axios from "axios";
import { useState, useEffect } from "react";

const Country = (props) => {
  const country = props.country[0] ? props.country[0] : ""
  return (
    <div>
      {console.log("props.country", country)}
      {country ? (
        <div>
          <h1>{country.name.common}</h1>
          <div>capital: {country.capital}</div>
          <div>area: {country.area}</div>
          <h2>languages</h2>
          <ul>
            {
              Object.entries(country.languages).map(item => <li>{item[1]}</li>)
            }
          </ul>
          <img
            src={country.flags.png}
            alt={`${country.name.common}'s flag`}
          />
        </div>
      ) : null}
    </div>
  );
};

const AppExercise211 = () => {
  const [countries, setCountries] = useState([]);
  // const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      // .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        console.log("response.data", response.data);
        setCountries(response.data)
      });
  // }, [newSearch, message]);
  }, []);

  const onSearchChange = (event) => {
    // setNewSearch(event.target.value);

    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    if (filteredCountries.length <= 10) {
      setFilteredCountries(filtered);
      setMessage("");
    } else {
      setMessage("Be more specific");
      setFilteredCountries([]);
    }
  };

  return (
    <div>
      <div>
        find: <input onChange={onSearchChange} />
      </div>

      <div>
        {filteredCountries && filteredCountries.length > 1
          ? filteredCountries.map((country) => <div>{country.name.common}</div>)
          : <Country country={filteredCountries} /> || null}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default AppExercise211;
