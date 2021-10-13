import React, { useEffect, useState } from "react";
import s from "./MovieDeteilsPage.module.css";
import error404 from "../../images/404error.png";
// import { useParams } from "react-router";

const MovieDeteilsPage = ({ movie }) => {
  const normolizedDate = new Date(movie.release_date).getFullYear();
  const normolizedRate = movie.vote_average * 10;

  //   const [movie, setMovie] = useState(null);

  //   const { movieID } = useParams();

  //   useEffect(() => {});

  //   console.log(movieID);
  return (
    <>
      {" "}
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
    </>
  );
};

export default MovieDeteilsPage;
