const PersonForm = (props) => {
  return (
    <form>
      <div>
        name: <input onChange={props.onNameChangeHandler} />
      </div>
      <div>
        number: <input onChange={props.onNumberChangeHandler} />
      </div>
      <div>
        <button type="submit" onClick={props.onSubmitHandler}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
