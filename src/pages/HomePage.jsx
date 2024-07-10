import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../service/api";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
        }
      })
      .catch((error) => {
        console.log("Fatal error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
