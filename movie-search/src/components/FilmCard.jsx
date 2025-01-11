import React, { useEffect, useState } from "react";
import "./FilmCard.css";
import { useLocation } from "react-router-dom";

function FilmCard({}) {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    // Fetch Filme von TMDB basierend auf der Suchanfrage (query)
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f5d2d44d5339ed964cbb331be4f66167&query=${query}&language=de-DE`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div className="movie-cards-container">
      <h2>Suchergebnisse für "{query}"</h2>
      <ul className="movie-cards">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>

              {/* Popularity Circular Progress Bar */}
              <p>Popularity:</p>

              <div className="popularity">
                <div
                  className="progress-circle"
                  style={{
                    background: `conic-gradient(#007bff ${movie.popularity}%, #ddd ${movie.popularity}% 100%)`,
                  }}
                >
                  <span className="progress-value">
                    {Math.round(movie.popularity)}%
                  </span>
                </div>
              </div>
              {/* Vote Average */}
              <p className="vote-average">Vote Average: {movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmCard;
