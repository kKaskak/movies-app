import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useFavorite } from "../../Routes/FavoritesPage/hooks";
import { noImage } from "../../assets";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { hover, hoverSmall } from "./MoviePreviewAnim";
import {
  FavoriteHeart,
  MoviePreviewContainer,
  Poster,
  Date,
  MovieTitle,
} from "./MoviePreviewStyles";

const MoviePreview = ({ id, poster, title, date }) => {
  const movie = { id, poster, title, date };
  const { isFavorite, toggleFavorite } = useFavorite(movie);

  return (
    <MoviePreviewContainer id={id}>
      <Link to={`/${id}`} target="_blank" rel="noopener noreferrer">
        <Poster
          as={motion.img}
          whileHover={hoverSmall}
          className="poster"
          src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : noImage}
          alt={title}
        ></Poster>
      </Link>
      <MovieTitle className="title">{title}</MovieTitle>
      <Date className="subTitle">{date}</Date>
      <FavoriteHeart
        whileHover={hover}
        as={motion.button}
        onClick={(event) => {
          event.preventDefault();
          toggleFavorite();
        }}
      >
        {isFavorite ? (
          <MdFavorite size={25} color={"#fff"} />
        ) : (
          <MdFavoriteBorder size={25} color={"#fff"} />
        )}
      </FavoriteHeart>
    </MoviePreviewContainer>
  );
};

MoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default MoviePreview;
