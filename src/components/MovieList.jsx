import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { filteredMovies } = useSelector(state => state.movies);

  return (
    <div className="flex flex-wrap justify-center">
      {filteredMovies.length === 0 ? (
        <div className="text-gray-500 text-center w-full p-8">
          Aucun film ne correspond à vos critères
        </div>
      ) : (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;