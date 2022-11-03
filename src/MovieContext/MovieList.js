import React, { useState, useContext } from "react";

import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
<p>{movie.name} - {movie.price} - {movie.id}</p>
      ))}
    </div>
  );
};

export default MovieList;