import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

//66df2f10

function App() {
  /*functional component*/
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const API_URL = "https://www.omdbapi.com?apikey=66df2f10";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>SeaMovies</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            
            searchMovies(searchTerm);
          }}
       
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
//if you're returning an array of elements in react you need to make sure each elements at the top has a unique key
//this is because if i wanted to change 1 todo so we need key for each different todo item
//it is performance optimization
