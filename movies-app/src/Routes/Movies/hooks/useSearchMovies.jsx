import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchMovies = (apiKey, searchText, type) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);

  const fetchSearchResults = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const loadSearchResults = async () => {
      const data = await fetchSearchResults();
      if (data) {
        setContent((prevContent) => [...prevContent, ...data.results]);
        setNumOfPages(data.total_pages);
      } else {
        setContent([]);
        setNumOfPages(0);
      }
    };

    loadSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, type, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { content, numOfPages, handleLoadMore };
};

export default useSearchMovies;
