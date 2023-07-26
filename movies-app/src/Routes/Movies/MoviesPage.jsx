import React, { useState } from 'react';
import { MoviePreview, Navbar } from '../../components/export';
import SearchBar from './SearchBar/SearchBar';
import { useFetchMovies, useScroll, useSearchMovies, useGenres } from './hooks/export';
import { MoviesList, ErrorModal, Heading, Subheading, Category, CategoryContainer } from './MoviesComponentsStyles';
import { motion } from 'framer-motion';
import { hover } from './MoviesPageAnim'
const MoviesPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  
  
  const genres = useGenres(process.env.REACT_APP_API_KEY);
  const { content, error } = useFetchMovies(apiKey, page);
  const { contentSearch } = useSearchMovies(apiKey, searchQuery);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useScroll(handleLoadMore);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSearch = (searchText) => {
    setSearchQuery(searchText.toLowerCase());
    setPage(1); 
  };
  const handleClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  // Use the selected genre if selected otherwise use contentsearch otherwise use trending
  const movieData = selectedGenre 
    ? content.filter(movie => movie.genre_ids.includes(selectedGenre))
    : searchQuery 
        ? contentSearch 
        : content;

  return (
    <div>
      <Navbar />
      <Heading>Movies App</Heading>
      <SearchBar onSearch={handleSearch} />
      <Subheading>Search for your favorite movies! Use favorites to save them.</Subheading>
      <CategoryContainer>
      <Category onClick={() => setSelectedGenre(null)}>All</Category>
      {genres.map((genre) => (
          <Category as={motion.button} whileHover={hover} key={genre.id} onClick={() => handleClick(genre.id)}>
            {genre.name}
          </Category>
      ))}
      </CategoryContainer>
      <MoviesList>
        {movieData &&
          movieData.map((c) => (
            <MoviePreview
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </MoviesList>
      {error && <ErrorModal>{error} <button onClick={handleRefresh}>Refresh</button></ErrorModal>}
    </div>
  );
};

export default MoviesPage;
