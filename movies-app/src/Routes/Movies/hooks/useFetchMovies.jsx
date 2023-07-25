import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useFetchMovies = (apiKey, page) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const movieIds = useRef(new Set());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`);

        
        const uniqueMovies = data.results.filter(movie => !movieIds.current.has(movie.id));
        uniqueMovies.forEach(movie => movieIds.current.add(movie.id));
        
        setContent((prevContent) => [...prevContent, ...uniqueMovies]);
      } catch (error) {
        setError('Error fetching movies. Please try again later.');
      }
    };
    fetchMovies();
  }, [apiKey, page]);

  return { content, error };
};

export default useFetchMovies
