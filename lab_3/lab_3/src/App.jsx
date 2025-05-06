import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MagicBallPage from "./pages/MagicBallPage";
import Biography from "./pages/Biography";
import Masterpiece from "./pages/Masterpiece";
import NotFound from "./pages/NotFound";

import GalleryLayout from "./pages/gallery/GalleryLayout";
import GalleryList from "./pages/gallery/GalleryList";
import ArtworkDetail from "./pages/gallery/ArtworkDetail";
import NewArtwork from "./pages/gallery/NewArtwork";

import screamImg from "./assets/images/scream.png";
import anxietyImg from "./assets/images/anxiety.png";
import kissImg from "./assets/images/kiss.png";

const initialArtworks = [
  {
    id: 1,
    title: "Крик",
    author: "Едвард Мунк",
    year: 1893,
    description:
    "Найвідоміша експресіоністська робота Мунка, що зображує внутрішній екзистенційний страх.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: screamImg,
  },
  {
    id: 2,
    title: "Тривога",
    author: "Едвард Мунк",
    year: 1894,
    description:
    "Обличчя виражають відчай, а темні кольори — пригнічений стан.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: anxietyImg,
  },
  {
    id: 3,
    title: "Поцілунок",
    author: "Едвард Мунк",
    year: 1897,
    description:
    "Пара цілується, їхні обличчя зливаються в одне, символічно уособлюючи їхню єдність.",
    fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: kissImg,
  },
];

function App() {
  const [artworks, setArtworks] = useState(initialArtworks);

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MagicBallPage />} />
            <Route path="magic-ball" element={<MagicBallPage />} />
            <Route path="biography" element={<Biography />} />
            <Route path="masterpiece" element={<Masterpiece />} />
            <Route
              path="/gallery"
              element={
                <GalleryLayout artworks={artworks} setArtworks={setArtworks} />
              }
            >
              <Route index element={<GalleryList />} />
              <Route path=":id" element={<ArtworkDetail />} />
              <Route path="new" element={<NewArtwork />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
