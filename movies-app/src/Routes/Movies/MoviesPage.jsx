import React, { useState } from 'react';
import { MoviePreview, Navbar } from '../../components/export';
import SearchBar from './SearchBar/SearchBar';
import { useFetchMovies, useScroll, useSearchMovies, useGenres, useFetchGenre } from './hooks/export';
import { MoviesList, ErrorModal } from './MoviesComponentsStyles';
const MoviesPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  
  const { content, error } = useFetchMovies(apiKey, page);
  const { contentSearch } = useSearchMovies(apiKey, searchQuery);
  const genres = useGenres(process.env.REACT_APP_API_KEY);
  const movies = useFetchGenre(process.env.REACT_APP_API_KEY, selectedGenre);
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
  const movieData = selectedGenre ? movies : searchQuery ? contentSearch : content;


  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <h1>Movies App</h1>
      <h2>Fetching data from an API, sorting favorites, and more</h2>
      <button onClick={() => setSelectedGenre(null)}>All</button>
      {genres.map((genre) => (
          <button key={genre.id} onClick={() => handleClick(genre.id)}>
            {genre.name}
          </button>
      ))}
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
