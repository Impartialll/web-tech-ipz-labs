import React from "react";
import { Outlet } from "react-router-dom";

export default function GalleryLayout({ artworks, setArtworks }) {
  React.useEffect(() => {
    document.title = "Галерея";
  }, []);
  return <Outlet context={[artworks, setArtworks]} />;
}
