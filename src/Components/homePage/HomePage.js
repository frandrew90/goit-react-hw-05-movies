import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = ({ trendingMovies }) => {
  const { url } = useRouteMatch();

  return (
    <ul className={s.trendingList}>
      {trendingMovies.map((movie) => (
        <li className={s.trendingListItem} key={movie.id}>
          <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
