import React, { useState } from "react";
import { MoviePreview, PageLayout } from "../../components";
import { SearchBar } from "./SearchBar";
import { useFetchMovies, useScroll, useSearchMovies } from "./hooks";
import { apiKey } from "../../variables";
import { FaRegHandPointDown } from "react-icons/fa";
import { MoviesList, Subheading } from "./MoviesComponentsStyles";
import MovieNotAvaible from "../MoviePage/MovieNotAvaible";
import Categories from "./Categories/Categories";

const MoviesPage = () => {
  const [page, setPage] = useState(1); // pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { content, error } = useFetchMovies(apiKey, page, selectedGenre);
  const { contentSearch } = useSearchMovies(apiKey, searchQuery);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useScroll(handleLoadMore);

  const handleSearch = (searchText) => {
    setSearchQuery(searchText.toLowerCase());
    setPage(1);
  };

  const handleGenreChange = (genreId) => {
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
      <PageLayout />
      <Subheading>
        Search for your favorite movies{" "}
        <FaRegHandPointDown size={25} color="#0d090a" />
      </Subheading>
      <SearchBar onSearch={handleSearch} />
      <Subheading>
        Categories <FaRegHandPointDown size={25} color="#0d090a" />
      </Subheading>
      {!error ? (
        <div>
          <Categories
            selectedGenre={selectedGenre}
            genreChange={handleGenreChange}
          />
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
        </div>
      ) : (
        <MovieNotAvaible />
      )}
    </>
  );
};

export default MoviesPage;
