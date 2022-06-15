export function Content(props) {
    // console.log({children})
    console.log(props.children)
    return (
      <div>
        {props.children}        
      </div>
    );
  }

  // <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
  // <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
  // <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
          
  // <p >
  //             {props.part1} {props.exercise1}
  //           </p>
  //           <p>
  //             {props.part2} {props.exercise2}
  //           </p>
  //           <p>
  //             {props.part3} {props.exercise3}
  //           </p>