import Filter from "../components/Filter.js";
import PersonForm from "../components/PersonForm.js";
import Persons from "../components/Persons.js";

import { useState } from "react";

const AppExercise210 = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  // const [notesToShow, setNotesToShow] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons((personsArr) =>
      personsArr.concat({ name: newName, number: newNumber })
    );
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

      <Filter onFilterChangeHandler={onFilterChangeHandler}/>

      <h3>Add a new</h3>

      <PersonForm onNameChangeHandler={onNameChangeHandler} onNumberChangeHandler={onNumberChangeHandler} onSubmitHandler={onSubmitHandler}/>

      <h3>Numbers</h3>

      <Persons notesToShow={notesToShow}/>
    </div>
  );
};

export default AppExercise210;