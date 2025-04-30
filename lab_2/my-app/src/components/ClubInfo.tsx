interface ClubInfoProps {
  name: string;
  city: string;
  foundationYear: number;
  logo: string;
}

function ClubInfo({ name, city, foundationYear, logo }: ClubInfoProps) {
  return (
    <div className="card-clubs">
      <h2>{name}</h2>
      <p>Місто: {city}</p>
      <p>Дата заснування: {foundationYear}</p>
      <img src={logo} alt={`Герб клубу ${name}`} className="club-logo" />
    </div>
  );
}

export default ClubInfo;
