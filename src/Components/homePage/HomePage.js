import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./HomePage.module.css";
import PropTypes from "prop-types";

const HomePage = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <ul className={s.trendingList}>
      {trendingMovies.map((movie) => (
        <li className={s.trendingListItem} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.array,
};
