import React, { useContext } from 'react';
import { Navbar, MoviePreview } from '../../components/export';
import { FavoritesContainer } from './FavoritesPageStyles';
import { FavoritesContext } from '../Favorites/FavoritesProvider';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <Navbar />
      <h1>Favorites</h1>
      <FavoritesContainer>
       {favorites.length > 0 ? favorites.map((movie) => (
          <MoviePreview
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            title={movie.title}
            date={movie.date}
            media_type={movie.media_type}
          />
        )) : 
        (<h1>No favorites yet! Add some</h1>)
        }
      </FavoritesContainer>
    </>
  );
};

export default FavoritesPage;
