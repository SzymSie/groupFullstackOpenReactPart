import { useState } from "react";
import { useMemo } from "react";

const AppExercise206 = () => {
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
    // setPersons(prevState => {
    //   prevState.concat({name: newName})
    // })
    //   setPersons(persons.concat({name: newName}))

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

  const notesToShow = useMemo(() =>  persons.filter(note => note.name.toLowerCase().includes(filter))
, [filter, persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input onChange={onFilterChangeHandler} />
      </div>
      <form>
        <div>
          <h2>add a new</h2>
          name: <input onChange={onNameChangeHandler} />
        </div>
        <div>
          number: <input onChange={onNumberChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={onSubmitHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.includes(filter))
        .map((person) => (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};

export default AppExercise206;
