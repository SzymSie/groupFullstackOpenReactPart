import { Content } from "./Content.js";
import { Header } from "./Header.js";
import { Part } from "./Part.js";
import { Total } from "./Total.js";

const Course = (props) => {
  return (
    <>
      {props.courses.map((course) => (
        <>
          <Header course={course} />
          <Content course={course}>
            {course.parts.map((part) => (
              <Part
                part={part.name}
                exercise={part.exercises}
                key={part.name}
              />
            ))}
            <Total course={course} />
          </Content>
        </>
      ))}
    </>
  );
};

export default Course;

