import React, { useEffect, useState } from "react";
import { getReviews } from "../../services/ApiService";

import s from "./Reviews.module.css";

const Reviews = ({ movieID }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieID).then(setReviews);
  }, [movieID]);

  console.log("rev", reviews);

  return (
    <ul>
      {reviews && reviews.length !== 0
        ? reviews.map((review) => (
            <li key={review.id}>
              <p className={s.authorName}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        : "We don't have any reviews for this movie"}
    </ul>
  );
};

export default Reviews;
