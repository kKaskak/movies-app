import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageLayout, Loading } from "../../components";
import {
  Heading,
  MoviePageContainer,
  MainImage,
  MovieContent,
} from "./MoviePageStyles";
import { useParams } from "react-router-dom";
import { noImage } from "../../assets";
import MovieNotAvaible from "./MovieNotAvaible";
import { apiKey } from "../../variables";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
        );
        setMovie(data);
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

  if (error) return <MovieNotAvaible errorMessage={error} />;

  return (
    <>
      <PageLayout />
      {loading ? (
        <Loading />
      ) : (
        <MoviePageContainer>
          <MainImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : noImage
            }
            alt={movie.title}
          ></MainImage>
          <MovieContent>
            <Heading>{movie.title}</Heading>
            <p>{movie.overview}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Release: {movie.release_date}</p>
            <p>Status: {movie.status}</p>
            <h4>Genres</h4>
            <div>
              {movie.genres.map((genre, index) => (
                <p key={index}>{genre.name}</p>
              ))}
            </div>
            <a style={{ textDecoration: "underline" }} href={movie.homepage}>
              Movie page: {movie.homepage}
            </a>
          </MovieContent>
        </MoviePageContainer>
      )}
    </>
  );
};

export default MoviePage;
