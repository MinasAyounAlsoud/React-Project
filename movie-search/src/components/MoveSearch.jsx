import React, { useState } from "react";
import "./MoveSearch.css";
import { useNavigate } from "react-router-dom";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/films?query=${query}`); // Navigiere zur "Film Card"-Seite
    }
  };

  return (
    <div className="search-container">
      <h1>Film-Suche</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Film suchen..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Suchen
      </button>
    </div>
  );
}

export default MovieSearch;
