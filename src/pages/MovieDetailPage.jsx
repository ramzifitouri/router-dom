import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies } = useSelector(state => state.movies);
  
  // Trouver le film correspondant à l'ID
  const movie = movies.find(movie => movie.id === Number(id));
  
  if (!movie) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="bg-red-100 p-4 rounded mb-4">
          Film non trouvé
        </div>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => navigate('/')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        ← Retour à l'accueil
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src={movie.posterURL} 
            alt={movie.title}
            className="w-full rounded shadow-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{movie.rating}/5</span>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-6">{movie.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Bande-annonce</h2>
          {movie.trailerLink ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src={movie.trailerLink}
                title={`${movie.title} trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className="text-gray-500">Aucune bande-annonce disponible pour ce film.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;