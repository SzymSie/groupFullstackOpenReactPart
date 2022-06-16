import axios from "axios";
import { useState, useEffect } from "react";

const Country = (props) => {
  const country = props.country[0] ? props.country[0] : ""
  return (
    <div>
      {console.log("props.country", country)}
      {country && (
        <div>
          <div>capital: {country.capital}</div>
          <div>area: {country.area}</div>
          <h2>languages</h2>
          <ul>
            {/* {country?.languages.map((language) => <li>{language.name}</li>) : null} */}
          </ul>
        </div>
      )}
    </div>
  );
};

const AppExercise212 = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${newSearch}`)
      .then((response) => {
        console.log("response.data", response.data);
        if (response.data.length <= 10) {
          setCountries(response.data);
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

export default AppExercise212;