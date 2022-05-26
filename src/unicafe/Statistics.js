import {StatisticLine} from "../components/StatisticLine.js";

export const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />

      {/* 1.6 */}
      <div>all {props.all}</div>
      <div>average {props.average}</div>
      <div>positive {props.positive} %</div> 
      
    </div>

  )}