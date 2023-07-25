import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
const useFetchGenre = (apiKey, genreId, page) => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`
        );
        setMovies(response.data.results);
      };
  
      fetchMovies();
    }, [apiKey, genreId, page]);
  
    return movies;
  };

  export default useFetchGenre;