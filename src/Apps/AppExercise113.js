import { useState } from 'react'


    // let number = Math.floor((Math.random()*anecdotes.length))
    // console.log(number)
    // setSelected(number)

const AppExercise113 = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  // const [points, setPoints] = useState([0,0,0,0,0,0,0,0,0,0,0])

  const anecdoteHandler = () => {
    let number = Math.floor((Math.random()*anecdotes.length))
    // console.log(number)
    setSelected(number)
  }

  const voteHandler = () => {
    const copy = [...points]
    copy[selected] += 1
    // setPoints(copy)
    setPoints([...copy])

    // solution
    // const votesCopy = [...points];
    // //2) Increment by one the value for the correspondent anecdote
    // votesCopy[selected] += 1; //Grab the last value and add 1
    // //3) Set the array with the update votes to the component's state
    // setPoints(votesCopy);
    // setPoints([...votesCopy])
  }

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
        <button onClick={voteHandler}>vote</button>
        <button onClick={anecdoteHandler}>next anecdote</button>
    </>
  )
}

export default AppExercise113
