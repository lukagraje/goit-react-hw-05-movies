import { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from "../service/api";
import { Button, ButtonDetails } from "./App.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log("Fatal error:", error);
      });
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? "/");
  };

  const handleClick = (event) => {
    const path = event.target.value.toLowerCase();
    navigate(`./${path}`);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, release_date, overview, genres, vote_average, poster_path } =
    movie;

  return (
    <div>
      <Button onClick={handleGoBack}>Go back</Button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={title}
        />
        <h2>
          {title}
          {" "}
          {release_date?.slice(0, 4)}
        </h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres?.map((genre) => (
          <span key={genre.id}>{genre.name}, </span>
        ))}
        <p>Additional information</p>

        <ButtonDetails value="Cast" onClick={handleClick}>
          Cast
        </ButtonDetails>
        <ButtonDetails value="Reviews" onClick={handleClick}>
          Reviews
        </ButtonDetails>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
