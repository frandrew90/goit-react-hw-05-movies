import React, { useEffect, useState } from "react";
import { getCast } from "../../services/ApiService";
import error404 from "../../images/404error.png";
import s from "./Cast.module.css";
import PropTypes from "prop-types";

const Cast = ({ movieID }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieID).then(setCast);
  }, [movieID]);

  // console.log(cast);

  return (
    <ul>
      {cast &&
        cast.map((profile) => (
          <li key={profile.id}>
            <img
              className={s.photo}
              src={
                profile.profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile.profile_path}`
                  : error404
              }
              alt={profile.name}
            />
            <p className={s.name}>{profile.name}</p>
            <p className={s.character}>Character: &#32; {profile.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;

Cast.propTypes = {
  movieID: PropTypes.string.isRequired,
};
