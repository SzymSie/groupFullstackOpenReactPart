    import { Part } from "./Part"

    export function Content(props) {
      
      
      return (
        <div> 
          <Part part={props.part1} exercise={props.exercise1}/>
          <Part part={props.part2} exercise={props.exercise2}/>
          <Part part={props.part3} exercise={props.exercise3}/>
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