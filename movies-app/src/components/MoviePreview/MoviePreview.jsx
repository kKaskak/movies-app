import React from 'react';
import { useFavorite } from '../../Routes/Favorites/hooks/useFavorite'; 
import { FavoriteHeart, MoviePreviewContainer, Poster, Date , MovieTitle } from './MoviePreviewStyles';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import { noImage } from '../../assets/export';
import { motion } from 'framer-motion'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { hover, hoverSmall} from './MoviePreviewAnim'
const MoviePreview = ({
  id,
  poster,
  title,
  date,
  media_type,
}) => {
  const movie = { id, poster, title, date };
  const { isFavorite, toggleFavorite } = useFavorite(movie);

  return (
      <MoviePreviewContainer id={id}>
         <Link to={`/${id}`}>
            <Poster
            as={motion.img}
            whileHover={hoverSmall}
              className="poster"
              src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : noImage }
              alt={title}>
            </Poster>
          </Link>
        <MovieTitle className="title">{title}</MovieTitle>
        <Date className="subTitle">{date}</Date>
        <FavoriteHeart whileHover={hover} as={motion.button} onClick={event => {
          event.preventDefault(); // prevent navigation
          toggleFavorite();
        }}>
          {isFavorite ? 
          <MdFavorite size={25} color={'#fff'} /> : <MdFavoriteBorder size={25} color={'#fff'} />}
        </FavoriteHeart>
      </MoviePreviewContainer>
  );
}

export default MoviePreview;

