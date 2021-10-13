import React, { useEffect, useState, lazy } from "react";
import s from "./MovieDeteilsPage.module.css";
import error404 from "../../images/404error.png";
import { Route, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";
const Cast = lazy(() => import("../movieCast/Cast"));
const Reviews = lazy(() => import("../moviesReview/Reviews"));

const MovieDeteilsPage = ({ movie }) => {
  const normolizedDate = new Date(movie.release_date).getFullYear();
  const normolizedRate = movie.vote_average * 10;

  const { url } = useRouteMatch();

  //   const [movie, setMovie] = useState(null);

  const { movieID } = useParams();

  //   useEffect(() => {});

  //   console.log(movieID);
  return (
    <>
      <button type="button"> Go back</button>
      <div>
        <img
          className={s.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : error404
          }
          alt={movie.title}
        />
        <h1>
          {movie.title}({normolizedDate})
        </h1>
        <p>User Score: {normolizedRate} % </p>
        <p>Overview </p>
        <p> {movie.overview} </p>
        <p>Genres </p>
        {movie.genres.map((gener) => (
          <span key={gener.name} className={s.genersItem}>
            {gener.name}
          </span>
        ))}
      </div>
      <div>
        <h2>Additional info</h2>
        <ul>
          <li>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkActive}
              to={`${url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkActive}
              to={`${url}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path={`/movies/${movieID}/cast`}>
          <Cast movieID={movieID} />
        </Route>

        <Route path={`/movies/${movieID}/reviews`}>
          <Reviews movieID={movieID} />
        </Route>
      </div>
    </>
  );
};

export default MovieDeteilsPage;
