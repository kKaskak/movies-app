import React from 'react';
import { useFavorite } from './hooks/useFavorite'; 
import { MoviePreviewContainer, Poster } from './MoviePreviewStyles';

const MoviePreview = ({
  id,
  poster,
  title,
  date,
  media_type,
}) => {
  const movie = { id, poster, title, date, media_type };
  const { isFavorite, toggleFavorite } = useFavorite(movie);

  return (
    <MoviePreviewContainer id={id}>
      <Poster
        className="poster"
        src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : ''}
        alt={title}></Poster>
      <b className="title">{title}</b>
      <p className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </p>
      <p className="subTitle">{date}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </MoviePreviewContainer>
  );
}

export default MoviePreview;

