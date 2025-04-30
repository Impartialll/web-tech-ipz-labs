interface TeamRosterProps {
  team: string[];
}

function TeamRoster({ team }: TeamRosterProps) {
  return (
    <div className="card-clubs">
      <h2>Склад команди</h2>
      <ul>
        {team.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamRoster;
