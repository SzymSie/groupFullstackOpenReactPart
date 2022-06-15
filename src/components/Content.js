<<<<<<< Updated upstream
    import { Part } from "./Part"

    export function Content(props) {
      
      
      return (
        <div> 
          <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
          <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
          <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
          {/* <p >
=======
// export function Content({ children }) {
export function Content(props) {
  // console.log({children})
  console.log(props.children)
  return (
    <div>
      {/* {children} */}
      {props.children}
      {/* <p >
>>>>>>> Stashed changes
            {props.part1} {props.exercise1}
          </p>
          <p>
            {props.part2} {props.exercise2}
          </p>
          <p>
            {props.part3} {props.exercise3}
          </p> */}
<<<<<<< Updated upstream
        </div>
      )
    }
    // props.course.parts[0].exercises
=======
    </div>
  );
}
// props.course.parts[0].exercises
>>>>>>> Stashed changes
