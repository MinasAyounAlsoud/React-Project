import { createBrowserRouter } from "react-router-dom";
import FilmCard from "../components/FilmCard";
import MoveSearch from "../components/MoveSearch";
import Header from "../components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MoveSearch />
      </>
    ),
  },
  {
    path: "/films", // Pfad für die Film-Ergebnisse
    element: (
      <>
        <FilmCard /> {/* FilmCard auf der Filme-Seite */}
      </>
    ),
  },
]);
