import { useState } from "react";

const AppExercise206 = () => {
  const [newName, setNewName] = useState("");
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newNumber, setNewNumber] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setPersons(prevState => {
    //   prevState.concat({name: newName})
    // })
    //   setPersons(persons.concat({name: newName}))

    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons((personsArr) => personsArr.concat({ name: newName, number: newNumber }));
  };

  const onNameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
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
      {persons.map((person) => (
        <div key={person.name}>{person.name} {person.number}</div>
      ))}
    </div>
  );
};

export default AppExercise206;
