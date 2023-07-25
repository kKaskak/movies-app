import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Navbar } from '../../components/export'
import { useFavorite } from '../../Routes/Favorites/hooks/useFavorite'; 
import { MoviePageContainer } from './MoviePageStyles'
import { useParams } from 'react-router-dom'; // you need to import useParams

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
  const { isFavorite, toggleFavorite } = useFavorite(movie || {});

  if (!movie) {
    return <div>Loading...</div>;
  }
console.log(movie)
  return (
    <>
      <Navbar />
      <MoviePageContainer>
        <h1>{movie.title}</h1>
        <button onClick={toggleFavorite}>
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
        <img width={300} src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ''} alt={movie.title} />
        <p>{movie.overview}</p>
        <p>{movie.runtime}</p>
        <p>{movie.release_date}</p>
        <p>{movie.status}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}
        </div>
        <a href={movie.homepage}>{movie.homepage}</a>
      
      </MoviePageContainer>
    </>
  );
}

export default MoviePage;
