import React, { useEffect, useState } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (ascending)
        // const sorted = data.sort((a, b) => a.NRR - b.NRR);
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-container">
      <h2>IPL 2022 Points Table</h2>

<table>
  <thead>
    <tr>
      <th>No</th>
      <th>Team</th>
      <th>Matches</th>
      <th>Won</th>
      <th>Lost</th>
      <th>NRR</th>
      <th>Points</th>
    </tr>
  </thead>

  <tbody>
    {teams.map((team, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.NRR}</td>
            <td>{team.Points}</td>
        </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default IPLTable;