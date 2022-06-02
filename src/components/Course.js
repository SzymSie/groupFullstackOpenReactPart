import { Content } from "./Content.js";
import Header from "./Header.js";
import { Part } from "./Part.js";
import { Total } from "./Total.js";

const Course = (props) => {
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
        <Part
          part={props.course.parts[3].name}
          exercise={props.course.parts[3].exercises}
        />
        <Total course={props.course} />
      </Content>
    </>
  );
};

export default Course;
