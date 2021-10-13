import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../../services/ApiService";
import MovieDeteilsPage from "../../Components/movieDeteils/MovieDeteilsPage";

const MovieDeteilsView = () => {
  const [movie, setMovie] = useState(null);

  const { movieID } = useParams();

  useEffect(() => {
    getMovieById(movieID).then(setMovie);
  }, [movieID]);

  console.log(movieID);
  return <>{movie && <MovieDeteilsPage movie={movie} />}</>;
};

export default MovieDeteilsView;
