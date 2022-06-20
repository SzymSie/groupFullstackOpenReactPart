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
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      // .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        console.log("response.data", response.data);
        const filteredCountries = response.data.filter(country =>
          country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
        if (filteredCountries.length <= 10) {
          setCountries(filteredCountries);
          setMessage("");
        } else {
          setMessage("Be more specific");
          setCountries([]);
        }
      });
  }, [newSearch, message]);

  const onSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <div>
        find: <input onChange={onSearchChange} />
      </div>

      <div>
        {countries && countries.length > 1
          ? countries.map((country) => <div>{country.name.common}</div>)
          : <Country country={countries} /> || null}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default AppExercise211;
