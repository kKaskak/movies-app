import React, { useContext } from "react";
import { PageLayout, MoviePreview } from "../../components";
import {
  FavoritesContainer,
  Heading,
  NoFavoritesMessage,
} from "./FavoritesPageStyles";
import { FavoritesContext } from "../Favorites/FavoritesProvider";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <PageLayout />
      <Heading>Your Favorites List</Heading>
      <FavoritesContainer>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MoviePreview
              key={movie.id}
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              date={movie.date}
            />
          ))
        ) : (
          <NoFavoritesMessage>
            No favorites yet! Add some to your list.
          </NoFavoritesMessage>
        )}
      </FavoritesContainer>
    </>
  );
};

export default FavoritesPage;
