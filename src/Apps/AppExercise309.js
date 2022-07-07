import Filter from "../components/Filter.js";
import PersonForm from "../components/PersonForm.js";
import Persons217 from "../components/Persons217.js";
import Notification from "../components/Notification.js";
import personService from "../services309";
import { useState, useEffect } from "react";
import "./AppExercise219.css";

const AppExercise309 = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationClass, setNotificationClass] = useState("successful");

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
      setNotificationMessage(`Added ${newName}`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      return;
    }

    personService
      .create(person)
      .then((response) =>
        setPersons((personsArr) => personsArr.concat(response))
      );

    setNotificationMessage(`Added ${newName}`);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
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
        .then(setPersons(persons.filter((p) => p.id !== id)))
        .catch((error) => {
          setNotificationMessage(`'${name}' was already removed from server`);
          setNotificationClass("error");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification
        message={notificationMessage}
        className={notificationClass}
      />

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

export default AppExercise309;
