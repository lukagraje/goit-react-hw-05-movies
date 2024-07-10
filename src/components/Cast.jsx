import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../service/api";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then((data) => {
        if (data.cast) {
          setCast(data.cast);
        }
      })
      .catch((error) => {
        console.log("Fatal error:", error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast?.map((actor) => (
          <li key={actor.cast_id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
