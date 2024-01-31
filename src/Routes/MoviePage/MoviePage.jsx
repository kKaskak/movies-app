import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiKey } from "../../variables";
import { PageLayout, Loading, MoviePreview } from "../../components";
import { FavoritesContext } from "../FavoritesPage/FavoritesProvider";
import MovieNotAvaible from "./MovieNotAvaible";
import { MoviePageContainer, MovieContent } from "./MoviePageStyles";

const MoviePage = () => {
  const { movieId } = useParams();
  const { favorites } = useContext(FavoritesContext);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieInfoIsUpdated, setMovieInfoIsUpdated] = useState("");
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
        );
        setMovie(data);

        // Find the movie in favorites
        const favoriteMovie = favorites.find(
          (favMovie) => favMovie.id === data.id,
        );

        // Compare the movie with the favorite version, if it exists
        if (
          favoriteMovie &&
          JSON.stringify(favoriteMovie) !== JSON.stringify(data)
        ) {
          setMovieInfoIsUpdated(
            "This movie info has been updated since you favorited it.",
          );
        } else if (
          favoriteMovie &&
          JSON.stringify(favoriteMovie) == JSON.stringify(data)
        ) {
          setMovieInfoIsUpdated(
            "This movie info has been not updated since you favorited it.",
          );
        } else {
          setMovieInfoIsUpdated("");
        }

        setTimeout(() => {
          setLoading(false);
        }, 300);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError(err.message);
        } else {
          setError(err.message);
        }
      }
    };

    fetchMovie();
  }, [movieId]);

  const convertMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours and ${remainingMinutes} minutes`;
  };
  if (error) return <MovieNotAvaible errorMessage={error} />;

  return (
    <>
      <PageLayout>
        {loading ? (
          <Loading />
        ) : (
          <MoviePageContainer>
            <MoviePreview
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
            />
            <MovieContent>
              <p>{movie.overview}</p>
              <p>Runtime: {convertMinutes(movie.runtime)}</p>
              <p>Status: {movie.status}</p>
              <h4>Genres:</h4>
              <ul style={{ marginLeft: "2rem" }}>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
              <p>Movie Homepage:</p>
              {movie.homepage ? (
                <a
                  style={{ textDecoration: "underline" }}
                  href={movie.homepage}
                >
                  {movie.homepage}
                </a>
              ) : (
                <p>Page not avaiable</p>
              )}
              <p>{movieInfoIsUpdated}</p>
            </MovieContent>
          </MoviePageContainer>
        )}
      </PageLayout>
    </>
  );
};

export default MoviePage;
