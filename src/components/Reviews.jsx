import React, { useState, useEffect } from "react";
import { getMovieReviews } from "../service/api";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((data) => {
        if (data.results) {
          setReviews(data.results);
        }
      })
      .catch((error) => {
        console.log("Fatal error: ", error);
      });
  }, [movieId]);
    
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews...</p>
      )}{" "}
    </div>
  );
};


export default Reviews;
