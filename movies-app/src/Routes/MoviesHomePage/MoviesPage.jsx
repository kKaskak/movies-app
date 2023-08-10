import React, { useState } from "react";
import { useFetchMovies, useScroll, useSearchMovies } from "./hooks";
import { apiKey } from "../../variables";
import { Loading, MoviePreview, ScrollUpButton } from "../../components";
import { Categories } from "./Categories";
import { SearchBar } from "./SearchBar";
import { TrendingError } from "./TrendingError";
import { FaRegHandPointDown } from "react-icons/fa";
import { MoviesList, Subheading } from "./MoviesComponentsStyles";

const MoviesPage = () => {
  const [page, setPage] = useState(1); // pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [nothingFound, setNothingFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { content, error, resetMovies } = useFetchMovies(
    apiKey,
    page,
    selectedGenre,
  );
  const { contentSearch } = useSearchMovies(apiKey, searchQuery, page);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useScroll(handleLoadMore);

  const handleSearch = (searchText) => {
    resetMovies();
    setSelectedGenre(null);
    setPage(1);
    searchText.length > 0 ? setSearchQuery(searchText) : setSearchQuery("");
    setIsLoading(true); // set loading state to true at the beginning of the search

    setTimeout(() => {
      contentSearch.length === 0
        ? setNothingFound(true)
        : setNothingFound(false);

      setIsLoading(false); // set loading state to false once the search completes
    }, 700);
  };

  const handleGenreChange = (genreId) => {
    resetMovies();
    setSearchQuery("");
    setSelectedGenre(genreId);
    setPage(1);
  };

  // Use the selected genre if selected otherwise use contentsearch otherwise use trending
  const movieData = selectedGenre
    ? content.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : searchQuery
    ? contentSearch
    : content;

  return (
    <>
      <ScrollUpButton />
      <Subheading>
        Search for your favorite movies{" "}
        <FaRegHandPointDown size={25} color="#0d090a" />
      </Subheading>
      <SearchBar onSearch={handleSearch} />
      <Subheading>
        Browse Trending By Categories{" "}
        <FaRegHandPointDown size={25} color="#0d090a" />
      </Subheading>
      {!error ? (
        <div>
          <Categories
            selectedGenre={selectedGenre}
            genreChange={handleGenreChange}
          />
          <MoviesList>
            {isLoading && searchQuery && searchQuery.length >= 3 && <Loading />}
            {movieData &&
              movieData.map((c) => (
                <MoviePreview
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                />
              ))}
          </MoviesList>
          {!searchQuery && <Loading />}
          {searchQuery.length > 0 && searchQuery.length < 3 && (
            <Subheading>
              Type at least 3 letters to show search results
            </Subheading>
          )}
          {nothingFound && searchQuery.length >= 3 && (
            <Subheading>No movies found</Subheading>
          )}
        </div>
      ) : (
        <TrendingError errorMessage={error} />
      )}
    </>
  );
};

export default MoviesPage;
