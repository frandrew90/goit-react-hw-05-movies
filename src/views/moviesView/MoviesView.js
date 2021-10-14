import React, { useState, useEffect } from "react";
import { getMovieBySearch } from "../../services/ApiService";

const MoviesView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(null);

  //   console.log(movies);

  //   useEffect(() => {
  //     searchQuery && getMovieBySearch(searchQuery).then(setMovies);
  //   }, [searchQuery]);

  //   setSearchQuery("batman");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchQuery && getMovieBySearch(searchQuery).then(setMovies);
  };

  console.log(searchQuery);
  console.log(movies);

  return (
    <section>
      <h1>Movies by search word: {searchQuery}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="searchQuery"
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default MoviesView;
