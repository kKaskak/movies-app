import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useGenres } from "../hooks";
import { apiKey } from "../../../variables";
import {
  Category,
  CategoryContainer,
  ShowMoreButton,
  ShowMoreContainer,
} from "./CategoriesStyles";

const Categories = ({ genreChange, selectedGenre }) => {
  const [displayMoreCategories, setDisplayMoreCategories] = useState(false);
  const genres = useGenres(apiKey);
  const handleClick = (genreId) => {
    genreChange(genreId);
  };
  const handleAllReset = () => {
    genreChange(null);
  };
  const [seeMore, setSeeMore] = useState(false);
  const toggleSeeMore = () => {
    setSeeMore((prev) => !prev);
    setDisplayMoreCategories((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {!displayMoreCategories && (
          <CategoryContainer
            isActive={displayMoreCategories ? "true" : undefined}
          >
            <Category onClick={handleAllReset}>All</Category>
            {genres.map((genre) => (
              <Category
                as={motion.button}
                key={genre.id}
                onClick={() => handleClick(genre.id)}
                isActive={genre.id === selectedGenre}
              >
                {genre.name}
              </Category>
            ))}
          </CategoryContainer>
        )}
        {displayMoreCategories && (
          <CategoryContainer
            isActive={displayMoreCategories ? "true" : undefined}
          >
            <Category onClick={handleAllReset}>All</Category>
            {genres.map((genre) => (
              <Category
                as={motion.button}
                key={genre.id}
                onClick={() => handleClick(genre.id)}
                isActive={genre.id === selectedGenre}
              >
                {genre.name}
              </Category>
            ))}
          </CategoryContainer>
        )}
      </AnimatePresence>
      <ShowMoreContainer>
        <ShowMoreButton
          isActive={displayMoreCategories ? "true" : undefined}
          onClick={toggleSeeMore}
        >
          {seeMore ? "Less" : "More"}
          {!seeMore ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}{" "}
        </ShowMoreButton>
      </ShowMoreContainer>
    </>
  );
};

Categories.propTypes = {
  genreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(null),
  ]),
};

export default Categories;
