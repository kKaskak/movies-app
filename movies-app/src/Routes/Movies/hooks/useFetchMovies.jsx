import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetchMovies = (apiKey, page, genreId = null) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const movieIds = useRef(new Set());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = genreId
          ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreId}`
          : `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`;

        const { data } = await axios.get(url);

        const uniqueMovies = data.results.filter(
          (movie) => !movieIds.current.has(movie.id),
        );
        uniqueMovies.forEach((movie) => movieIds.current.add(movie.id));

        setContent((prevContent) => [...prevContent, ...uniqueMovies]);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [apiKey, page, genreId]);

  return { content, error };
};

export default useFetchMovies;
