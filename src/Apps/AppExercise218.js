import Filter from "../components/Filter.js";
import PersonForm from "../components/PersonForm.js";
import Persons217 from "../components/Persons217.js";
import personService from "../services";

import { useState, useEffect } from "react";

const AppExercise217 = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const person = { name: newName, number: newNumber };
    const personToUpdate = persons.find((p) => p.name === newName);

    if (personToUpdate) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(personToUpdate.id, person)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id !== personToUpdate.id ? p : returnedPerson
              )
            );
          });
      }
      return;
    }

    personService
      .create(person)
      .then((response) =>
        setPersons((personsArr) => personsArr.concat(response))
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

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  const onDeletePersonClick = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .deleteItem(id)
        .then(setPersons(persons.filter((p) => p.id !== id)));
    }
  };

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

      <Persons217
        personsToShow={personsToShow}
        deletePersonHandler={onDeletePersonClick}
      />
    </div>
  );
};

export default AppExercise217;
