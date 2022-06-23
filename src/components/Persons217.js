const Persons217 = (props) => {
  return (
    <div>
      {props.personsToShow.map((person) => (
        <div>
          <div style={{ display: "inline-block" }} key={person.id}>
            {person.name} {person.number}
          </div>
          <button
            style={{ display: "inline-block" }}
            onClick={() => props.deletePersonHandler(person.id, person.name)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons217;
