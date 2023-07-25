import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useSearchMovies = (apiKey, searchText) => {
  const [page, setPage] = useState(1);
  const [contentSearch, setContentSearch] = useState([]);
  const movieIds = useRef(new Set())
  const fetchSearchResults = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  // Clear the search results when the search text or type changes
    useEffect(() => {
      setContentSearch([]);
    }, [searchText]);
    
  useEffect(() => {
    const loadSearchResults = async () => {
      const data = await fetchSearchResults();
      if (data) {
        const uniqueMovies = data.results.filter(movie => !movieIds.current.has(movie.id));
        uniqueMovies.forEach(movie => movieIds.current.add(movie.id));
        setContentSearch([...uniqueMovies]);
      }
    };
    loadSearchResults();
  }, [searchText, page]);


  return { contentSearch };
};

export default useSearchMovies;
