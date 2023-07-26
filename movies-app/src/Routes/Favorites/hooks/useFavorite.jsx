import { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';

export const useFavorite = (movie) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some(favorite => favorite.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter(favorite => favorite.id !== movie.id);
      setFavorites(newFavorites);
    } else {
      // Add to favorites
      setFavorites(prevFavorites => [...prevFavorites, movie]);
    }
  };

  return { isFavorite, toggleFavorite };
};
