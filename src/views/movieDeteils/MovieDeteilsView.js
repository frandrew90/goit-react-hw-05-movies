import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { getMovieById } from "../../services/ApiService";
import MovieDeteilsPage from "../../Components/movieDeteils/MovieDeteilsPage";

const MovieDeteilsView = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const { movieID } = useParams();
  const prevLocation = location?.state?.from?.location;

  useEffect(() => {
    getMovieById(movieID).then(setMovie);
    //   .catch(history.push(prevLocation ?? "/movies"));
  }, [movieID, history, prevLocation]);

  console.log(movieID);
  return <>{movie && <MovieDeteilsPage movie={movie} />}</>;
};

export default MovieDeteilsView;
