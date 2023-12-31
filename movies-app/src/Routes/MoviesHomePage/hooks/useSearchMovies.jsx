import { useState, useEffect } from "react";
import axios from "axios";

const useSearchMovies = (apiKey, searchText) => {
  const [page] = useState(1);
  const [searchError, setSearchError] = useState(null);
  const [contentSearch, setContentSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSearchResults = async () => {
    if (searchText.length < 3) return;
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
      );
      return data;
    } catch (error) {
      setSearchError(error.message);
      setLoading(false);
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
        const uniqueMovies = data.results;
        setContentSearch(uniqueMovies);
        setLoading(false);
      }
    };
    loadSearchResults();
  }, [searchText, page]);

  return { contentSearch, searchError, loading };
};

export default useSearchMovies;
