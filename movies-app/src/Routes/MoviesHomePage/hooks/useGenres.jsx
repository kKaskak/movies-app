import { useState, useEffect } from "react";
import axios from "axios";

const useGenres = (apiKey) => {
  const [genres, setGenres] = useState([]);
  const [GenresError, setGenresError] = useState(null);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

        const response = await axios.get(url);

        setGenres(response.data.genres);
      } catch (error) {
        setGenresError(error.message);
      }
    };

    fetchGenres();
  }, [apiKey]);

  return { genres, GenresError };
};

export default useGenres;
