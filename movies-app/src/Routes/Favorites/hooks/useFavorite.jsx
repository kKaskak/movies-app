import { useContext } from "react";
import axios from "axios";
import { FavoritesContext } from "../FavoritesProvider";
import { apiKey } from "../../../variables";

const useFavorite = (movie) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== movie.id,
      );
      setFavorites(newFavorites);
    } else {
      // Fetch full movie data and add to favorites
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`,
        )
        .then((response) => {
          const fullMovieData = response.data;
          setFavorites((prevFavorites) => [...prevFavorites, fullMovieData]);
          console.log(favorites);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorite;
