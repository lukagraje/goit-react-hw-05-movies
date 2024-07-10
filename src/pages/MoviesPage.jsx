import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchMovies } from "../service/api";
import { Button } from "../components/App.styled";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((data) => {
          if (data.results) {
            setMovies(data.results ?? []);
          }
        })
        .catch((error) => {
          console.log("Fatal error:", error);
        });
    }
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = inputRef.current.value.trim();
    if (searchQuery) {
      navigate(`?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="query"
          placeholder="Search movies..."
        />
        <Button type="submit">Search</Button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
