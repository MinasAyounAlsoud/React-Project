# Movie Search Application 🎬

This is a React-based web application that allows users to search for movies using the TMDB (The Movie Database) API. The app provides movie details, including title, overview, popularity, and vote average, in a visually appealing card layout.

# Features 🌟

- Movie Search: Search for movies by entering a query in the search bar.
- Dynamic Results: Displays movies dynamically based on the search query.
- Popularity Visualization: A circular progress bar indicates the movie's popularity.
- Localized Content: Movie data is displayed in German (de-DE).
- Responsive Design: Fully responsive for both desktop and mobile users.

# Tech Stack 🛠️

- React.js: For building the user interface.
- React Router: For navigation and query-based routes.
- CSS: For styling components.
- TMDB API: Fetches movie data based on user queries.

# Verwendung 🖥️

1- Suche nach Filmen
Gehe zur Startseite.
Gib den Namen eines Films in die Suchleiste ein.
Klicke auf "Suchen", um Suchergebnisse anzuzeigen.

2- Film-Details anzeigen
Siehe Titel, Beschreibung, Popularität und Durchschnittsbewertung für jeden Suchergebnisfilm.

3- Navigation
Nutze das Navigationsmenü, um weitere Bereiche (z. B. Filme, Serien, Personen, Mehr) zu erkunden.

# Verzeichnisstruktur 📂

src/
├── components/
│ ├── FilmCard.js # Zeigt Filmkarten basierend auf Suchergebnissen
│ ├── Header.js # Navigationsleiste mit Links und Suchsymbol
│ ├── MovieSearch.js # Suchfeld für Filme
├── styles/
│ ├── FilmCard.css # Stile für die Filmkarten
│ ├── Header.css # Stile für den Header
│ ├── MovieSearch.css # Stile für die Suchkomponente
├── App.js # Hauptanwendungsdatei
├── index.js # Einstiegspunkt der React-Anwendung

# API-Integration 🌐

- TMDB API:
  Basis-URL: https://api.themoviedb.org/3/search/movie
  API-Schlüssel: f5d2d44d5339ed964cbb331be4f66167
  Sprache: de-DE

# Zukünftige Verbesserungen 🔮

Hinzufügen weiterer Filter (z. B. Erscheinungsjahr, Genre).
Suche nach Serien und Personen hinzufügen.
Paginierung für große Suchergebnisse implementieren.
Design des Fortschrittsbalkens für bessere Benutzererfahrung verbessern.

# Lizenz 📄

Dieses Projekt steht unter der MIT-Lizenz. Du kannst es frei verwenden, modifizieren und verbreiten.

# Danksagungen 🙏

TMDB API für die Bereitstellung von Filmdaten.
Die React-Community für robuste Tools und Bibliotheken.
