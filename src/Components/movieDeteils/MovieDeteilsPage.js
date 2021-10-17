import React, { lazy } from "react";
import s from "./MovieDeteilsPage.module.css";
import error404 from "../../images/404error.png";
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router";
const Cast = lazy(() => import("../movieCast/Cast"));
const Reviews = lazy(() => import("../moviesReview/Reviews"));

const MovieDeteilsPage = ({ movie }) => {
  const normolizedDate = new Date(movie.release_date).getFullYear();
  const normolizedRate = movie.vote_average * 10;

  const { url } = useRouteMatch();

  const { movieID } = useParams();
  const history = useHistory();
  const location = useLocation();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  //   useEffect(() => {});

  //   console.log(movieID);
  return (
    <>
      <button className={s.goBack} type="button" onClick={onGoBack}>
        {location?.state?.from?.label ?? "Go back"}
      </button>
      <div className={s.filmWrapper}>
        <img
          className={s.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : error404
          }
          alt={movie.title}
        />
        <div>
          <h1 className={s.movieTitle}>
            {movie.title}({normolizedDate})
          </h1>
          <p>User Score: {normolizedRate} % </p>
          <p className={s.movieSubTitle}>Overview </p>
          <p>
            {movie.overview ? movie.overview : "There are no any overviews"}
          </p>
          <p className={s.movieSubTitle}>Genres </p>
          {movie.genres.map((gener) => (
            <span key={gener.name} className={s.genersItem}>
              {gener.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2>Additional info</h2>
        <ul className={s.additionalList}>
          <li>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkActive}
              to={{
                pathname: `${url}/cast`,
                state: location.state,
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.navLink}
              activeClassName={s.navLinkActive}
              to={{
                pathname: `${url}/reviews`,
                state: location.state,
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path={`${url}/cast`}>
          <Cast movieID={movieID} />
        </Route>

        <Route path={`${url}/reviews`}>
          <Reviews movieID={movieID} />
        </Route>
      </div>
    </>
  );
};

export default MovieDeteilsPage;
