import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Categories = () => {
  return (
    <>
      <AnimatePresence>
        {!displayMoreCategories && (
          <CategoryContainer
            is_active={displayMoreCategories ? "true" : undefined}
          >
            <Category onClick={() => setSelectedGenre(null)}>All</Category>
            {genres.map((genre) => (
              <Category
                as={motion.button}
                key={genre.id}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Category>
            ))}
          </CategoryContainer>
        )}
        {displayMoreCategories && (
          <CategoryContainer
            is_active={displayMoreCategories ? "true" : undefined}
          >
            <Category onClick={() => setSelectedGenre(null)}>All</Category>
            {genres.map((genre) => (
              <Category
                as={motion.button}
                key={genre.id}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Category>
            ))}
          </CategoryContainer>
        )}
      </AnimatePresence>
      <ShowMoreContainer>
        <ShowMoreButton
          is_active={displayMoreCategories ? "true" : undefined}
          onClick={() =>
            setDisplayMoreCategories(displayMoreCategories ? false : true)
          }
        >
          {displayMoreCategories ? "Less" : "More"}
          {!displayMoreCategories ? (
            <AiOutlineArrowDown />
          ) : (
            <AiOutlineArrowUp />
          )}{" "}
        </ShowMoreButton>
      </ShowMoreContainer>
    </>
  );
};

export default Categories;
