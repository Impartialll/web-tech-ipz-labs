import React from "react";
import ClubInfo from "../components/ClubInfo";
import Achievements from "../components/Achievements";
import TeamRoster from "../components/TeamRoaster";

import bayernLogo from "../assets/clubs/bayern.png";
import realLogo from "../assets/clubs/real.png";
import manCityLogo from "../assets/clubs/manCity.png";
import liverpoolLogo from "../assets/clubs/liverpool.png";

interface Club {
  id: number;
  name: string;
  city: string;
  foundationYear: number;
  logo: string;
  achievements: string[];
  team: string[];
}

const clubs: Club[] = [
  {
    id: 1,
    name: "FC Bayern München",
    city: "Мюнхен",
    foundationYear: 1900,
    logo: bayernLogo,
    achievements: [
      "33-разовий чемпіон Німеччини",
      "20-разовий володар Кубка Німеччини",
      "6-разовий переможець Ліги чемпіонів",
    ],
    team: [
      "Голкіпер: Мануель Нойєр",
      "Захисник: Маттейс де Лігт",
      "Півзахисник: Йозуа Кімміх",
      "Нападник: Гаррі Кейн",
    ],
  },
  {
    id: 2,
    name: "Real Madrid CF",
    city: "Мадрид",
    foundationYear: 1902,
    logo: realLogo,
    achievements: [
      "35-разовий чемпіон Іспанії",
      "20-разовий володар Кубка Іспанії",
      "14-разовий переможець Ліги чемпіонів",
    ],
    team: [
      "Голкіпер: Тібо Куртуа",
      "Захисник: Давид Алаба",
      "Півзахисник: Лука Модрич",
      "Нападник: Вінісіус Жуніор",
    ],
  },
  {
    id: 3,
    name: "Manchester City FC",
    city: "Манчестер",
    foundationYear: 1880,
    logo: manCityLogo,
    achievements: [
      "9-разовий чемпіон Англії",
      "6-разовий володар Кубка Англії",
      "Переможець Ліги чемпіонів 2023",
    ],
    team: [
      "Голкіпер: Едерсон",
      "Захисник: Кайл Вокер",
      "Півзахисник: Кевін Де Брюйне",
      "Нападник: Ерлінг Голанд",
    ],
  },
  {
    id: 4,
    name: "Liverpool FC",
    city: "Ліверпуль",
    foundationYear: 1892,
    logo: liverpoolLogo,
    achievements: [
      "19-разовий чемпіон Англії",
      "8-разовий володар Кубка Англії",
      "6-разовий переможець Ліги чемпіонів",
    ],
    team: [
      "Голкіпер: Аліссон Бекер",
      "Захисник: Вірджіл ван Дейк",
      "Півзахисник: Алексіс Мак Аллістер",
      "Нападник: Мохамед Салах",
    ],
  },
];

function FootballClubPage() {
  React.useEffect(() => {
    document.title = "Football Clubs";
  }, []);

  return (
    <div className="football-page-wrapper">
      <h1 className="page-title">Футбольні клуби</h1>
      <div className="football-page">
        {clubs.map((club) => (
          <div key={club.id} className="club-block">
            <ClubInfo
              name={club.name}
              city={club.city}
              foundationYear={club.foundationYear}
              logo={club.logo}
            />
            <Achievements achievements={club.achievements} />
            <TeamRoster team={club.team} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FootballClubPage;
