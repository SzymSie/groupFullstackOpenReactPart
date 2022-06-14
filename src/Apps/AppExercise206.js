import { useState } from "react";

const AppExercise206 = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setPersons(prevState => {
    //   prevState.concat({name: newName})
    // })
    //   setPersons(persons.concat({name: newName}))

    if (persons.some((person) => person.name === newName.name)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons((personsArr) => personsArr.concat({ name: newName }));
  };

  const onChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={onChangeHandler} />
        </div>
        <div>
          <button type="submit" onClick={onSubmitHandler}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default AppExercise206;
