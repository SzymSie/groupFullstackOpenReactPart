const Filter = (props) => {
    return (
        <div>
          filter: <input onChange={props.onFilterChangeHandler} />
        </div>
    )
}

export default Filter