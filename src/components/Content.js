    import { Part } from "./Part"

    export function Content(props) {
      
      
      return (
        <div> 
          <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
          <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
          <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
          {/* <p >
            {props.part1} {props.exercise1}
          </p>
          <p>
            {props.part2} {props.exercise2}
          </p>
          <p>
            {props.part3} {props.exercise3}
          </p> */}
        </div>
      )
    }
    // props.parts[0].exercises +