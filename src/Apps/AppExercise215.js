import Filter from "../components/Filter.js";
import PersonForm from "../components/PersonForm.js";
import Persons from "../components/Persons.js";
import axios from "axios";

import { useState, useEffect } from "react";

const AppExercise215 = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const person = { name: newName, number: newNumber };

    await axios
      .post("http://localhost:3001/persons", person)
      .then((response) => {
        setPersons((personsArr) => personsArr.concat(response.data));
      });
  };

  const onNameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  const notesToShow = persons.filter((note) =>
    note.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onFilterChangeHandler={onFilterChangeHandler} />

      <h3>Add a new</h3>

      <PersonForm
        onNameChangeHandler={onNameChangeHandler}
        onNumberChangeHandler={onNumberChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />

      <h3>Numbers</h3>

      <Persons notesToShow={notesToShow} />
    </div>
  );
};

export default AppExercise215;
