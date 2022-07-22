import { StatisticLine } from "../components/StatisticLine.js";

export const Statistics = (props) => {
  // <table>    Defines a table
  // <th>    Defines a header cell in a table
  // <tr>    Defines a row in a table
  // <td>    Defines a cell in a table
  return (
    <div>
      <table>
        <th>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={props.all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={props.average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={props.positive} />
          </tr>
        </th>
      </table>
    </div>
  );
};
