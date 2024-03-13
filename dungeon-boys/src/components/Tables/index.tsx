import React from "react";
import "./index.css";

function Table(props: any) {
  const { standings, leagueName } = props;
  
  console.log('standings: ', standings)

  return (
    <div>
      <h2>{leagueName || 'League Name'}</h2>
      <div className="table_component" role="region">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team & Manager</th>
              <th>GW Points</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {standings
              ? standings.map((data: any) => (
                  <tr key={data.id}>
                    <td>{data.rank}</td>
                    <td>{data.entry_name}</td>
                    <td>{data.event_total}</td>
                    <td>{data.total}</td>
                  </tr>
                ))
              : "No Data"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
