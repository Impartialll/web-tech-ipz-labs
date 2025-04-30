interface AchievementsProps {
  achievements: string[];
}

function Achievements({ achievements }: AchievementsProps) {
  return (
    <div className="card-clubs">
      <h2>Досягнення</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
