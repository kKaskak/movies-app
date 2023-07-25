import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Navbar } from '../../components/export'
import { MoviePageContainer } from './MoviePageStyles'
import { useParams } from 'react-router-dom';
import { noImage } from '../../assets/export'

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <MoviePageContainer>
        <h1>{movie.title}</h1>
        <img width={300} src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noImage } alt={movie.title} />
        <p>Desc: {movie.overview}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>Release: {movie.release_date}</p>
        <p>Status: {movie.status}</p>
        <div>
          <h4>Genres</h4>
          {movie.genres.map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}
        </div>
        <a href={movie.homepage}>Movie page: {movie.homepage}</a>
      
      </MoviePageContainer>
    </>
  );
}

export default MoviePage;
