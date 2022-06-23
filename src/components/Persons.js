const Persons217 = (props) => {
  return (
    <div>
      {props.notesToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons217;
