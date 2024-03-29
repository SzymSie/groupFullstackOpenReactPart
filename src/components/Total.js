import React from "react";

export function Total(props) {
  const total =
  props.course.parts.reduce((sum, part) => part.exercises + sum, 0)
  return (
    <div>
      Total of {total} exercises
    </div>
  );
}
