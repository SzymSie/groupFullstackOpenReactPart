import './App.css';
import Header from './components/Header.js';
import { Content } from './components/Content.js';
import { Total } from './components/Total.js';


function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10 
  // const exercises1
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
      <Total exercises={exercise1 + exercise2 + exercise3} />
    </div>

  );
}

export default App;
