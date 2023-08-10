import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useGenres } from "../hooks";
import { apiKey } from "../../../variables";
import { CategoriesError } from "./CategoriesError";
import {
  Category,
  CategoryContainer,
  ShowMoreButton,
  ShowMoreContainer,
} from "./CategoriesStyles";

const Categories = ({ genreChange, selectedGenre }) => {
  const [displayMoreCategories, setDisplayMoreCategories] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const { genres, GenresError } = useGenres(apiKey);

  const handleClick = (genreId) => {
    genreChange(genreId);
  };
  const handleAllReset = () => {
    genreChange(null);
  };
  const toggleSeeMore = () => {
    setSeeMore((prev) => !prev);
    setDisplayMoreCategories((prev) => !prev);
  };

  return (
    <>
      {!GenresError && (
        <>
          <AnimatePresence>
            {!displayMoreCategories && (
              <CategoryContainer
                active={displayMoreCategories ? "true" : undefined}
              >
                <Category onClick={handleAllReset}>All</Category>
                {genres.map((genre) => (
                  <Category
                    as={motion.button}
                    key={genre.id}
                    onClick={() => handleClick(genre.id)}
                    active={genre.id === selectedGenre ? "true" : undefined}
                  >
                    {genre.name}
                  </Category>
                ))}
              </CategoryContainer>
            )}
            {displayMoreCategories && (
              <CategoryContainer
                active={displayMoreCategories ? "true" : undefined}
              >
                <Category onClick={handleAllReset}>All</Category>
                {genres.map((genre) => (
                  <Category
                    as={motion.button}
                    key={genre.id}
                    onClick={() => handleClick(genre.id)}
                    active={genre.id === selectedGenre ? "true" : undefined}
                  >
                    {genre.name}
                  </Category>
                ))}
              </CategoryContainer>
            )}
          </AnimatePresence>
          <ShowMoreContainer>
            <ShowMoreButton
              active={displayMoreCategories ? "true" : undefined}
              onClick={toggleSeeMore}
            >
              {seeMore ? "Less" : "More"}
              {!seeMore ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}{" "}
            </ShowMoreButton>
          </ShowMoreContainer>
        </>
      )}
      {GenresError && <CategoriesError categoriesError={GenresError} />}
    </>
  );
};

Categories.propTypes = {
  genreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(null),
  ]),
  updatePage: PropTypes.func,
};

export default Categories;
