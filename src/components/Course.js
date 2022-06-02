import { Content } from "./Content.js";
import Header from "./Header.js";
import { Part } from "./Part.js";

const Course = (props) => {
  console.log({ props });
  return (
    <>
      <Header course={props.course} />
      <Content course={props.course}>
        {/* <Part />
        <Part />
        <Part /> */}
        <Part
          part={props.course.parts[0].name}
          exercise={props.course.parts[0].exercises}
        />
        <Part
          part={props.course.parts[1].name}
          exercise={props.course.parts[1].exercises}
        />
        <Part
          part={props.course.parts[2].name}
          exercise={props.course.parts[2].exercises}
        />
      </Content>
    </>
  );
};

export default Course;
