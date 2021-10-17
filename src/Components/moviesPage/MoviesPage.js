import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import error404 from "../../images/404error.png";

import s from "./MoviesPage.module.css";

const MoviesPage = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies && movies.length !== 0 ? (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  className={s.movieListTitle}
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
            );
          })}
        </ul>
      ) : (
        <div>
          <p>Something went wrong... There are no films...</p>
          <img src={error404} alt="There is no film" width="800" height="600" />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
