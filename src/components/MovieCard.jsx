import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className="max-w-xs rounded overflow-hidden shadow-lg m-2 cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <img 
        className="w-full h-80 object-cover" 
        src={movie.posterURL} 
        alt={movie.title} 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{movie.rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;