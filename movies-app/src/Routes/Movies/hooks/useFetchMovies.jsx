import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useFetchMovies = (apiKey, page) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);
  const movieIds = useRef(new Set());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`);
        
        // Only add a movie if its ID is not already in the set.
        const uniqueMovies = data.results.filter(movie => !movieIds.current.has(movie.id));
        
        // Add the IDs of all unique movies to the set.
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

export default useFetchMovies;
