import { useState } from 'react'

const AppExercise114 = () => {
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
  const [highestVoteIndex, setHighestVoteIndex] = useState()

  const anecdoteHandler = () => {
    let number = Math.floor((Math.random()*anecdotes.length))
    setSelected(number)
  }

  const voteHandler = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints([...copy])

    pickMaxIndex()
  }

  const pickMaxIndex = () => {
    const highestValue = Math.max(...points)
    console.log({highestValue})

    const highestValueIndex = points.indexOf(highestValue)

    console.log({highestValueIndex})

    setHighestVoteIndex(highestValueIndex)
  }

  return (
    <>
    <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
        <button onClick={voteHandler}>vote</button>
        <button onClick={anecdoteHandler}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
        {/* <div>{anecdotes[(Math.max(...points))]}</div> */}
        <div>{anecdotes[highestVoteIndex]}</div>

        {/* <div>{anecdotes[points.find(Math.max(...points))]}</div> */}
        <div>has {points[highestVoteIndex]} votes</div>
        {/* <div>{pickMaxIndex}</div> */}


    </>
  )
}

export default AppExercise114
