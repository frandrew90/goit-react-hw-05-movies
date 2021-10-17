import React, { useState, useEffect } from "react";
import { getMovieBySearch } from "../../services/ApiService";
import { useHistory, useLocation } from "react-router-dom";
import MoviesPage from "../../Components/moviesPage/MoviesPage";

const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  const history = useHistory();

  //   console.log("location", location);
  //   console.log("history", history);

  const savedQuery = new URLSearchParams(location.search).get("query") ?? "";

  //   console.log(savedQuery);

  useEffect(() => {
    savedQuery && getMovieBySearch(savedQuery).then(setMovies);
  }, [savedQuery, location, history]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
    getMovieBySearch(searchQuery).then(setMovies);
  };

  //   console.log(searchQuery);
  //   console.log(movies);

  return (
    <section>
      {/* <h1>Movies by search word: {searchQuery}</h1> */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="searchQuery"
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>

      {movies && <MoviesPage movies={movies} />}
    </section>
  );
};

export default MoviesView;
