import React, { useState } from 'react';
import { MoviePreview, Navbar } from '../../components/export';
import SearchBar from './SearchBar/SearchBar';
import { useFetchMovies, useScroll } from './hooks/export';
import { MoviesList, ErrorModal } from './MoviesComponentsStyles';

const MoviesPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { content, searchResults, error } = useFetchMovies(apiKey, page, searchQuery);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useScroll(handleLoadMore);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSearch = (searchText) => {
    setSearchQuery(searchText);
    setPage(1); // Reset page to 1 when a new search is made
  };

  // Use searchResults if available, otherwise use the trending content
  const movieData = searchQuery ? searchResults : content;

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <h1>Movies App</h1>
      <h2>Fetching data from an API, sorting favorites, and more</h2>
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
