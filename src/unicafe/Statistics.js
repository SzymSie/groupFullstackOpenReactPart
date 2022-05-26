
export const Statistics = (props) => {
  return (
    <div>

      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>

      {/* 1.6 */}
      <div>all {props.all}</div>
      <div>average {props.average}</div>
      <div>positive {props.positive} %</div> 
      
    </div>

  )}