
// export function Content({ children }) {
export function Content(props) {
  // console.log({children})
  console.log(props.children)
  return (
    <div>
      {/* {children} */}
      {props.children}
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
  );
}
// props.course.parts[0].exercises

<div someProp="somePropText">text</div>