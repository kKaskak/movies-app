import { useState, useEffect } from 'react';
import axios from 'axios';

const useGenres = (apiKey) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      );
      setGenres(response.data.genres);
    };

    fetchGenres();
  }, [apiKey]);

  return genres;
};

export default useGenres