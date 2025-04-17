import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailerLink: ''
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.posterURL) {
      dispatch(addMovie({
        ...newMovie,
        id: Date.now() // Utilisation d'un timestamp comme ID unique
      }));
      // Réinitialiser le formulaire
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0,
        trailerLink: ''
      });
      setShowForm(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Collection de Films</h1>
      
      <div className="mb-8">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showForm ? 'Annuler' : 'Ajouter un film'}
        </button>
        
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={newMovie.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="3"
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">URL de l'affiche</label>
              <input
                type="url"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Note: {newMovie.rating}
              </label>
              <input
                type="range"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                value={newMovie.rating}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Lien de la bande-annonce (YouTube Embed)</label>
              <input
                type="url"
                name="trailerLink"
                value={newMovie.trailerLink}
                onChange={handleInputChange}
                placeholder="https://www.youtube.com/embed/ID_VIDEO"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <button 
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Ajouter
            </button>
          </form>
        )}
      </div>
      
      <Filter />
      <MovieList />
    </div>
  );
};

export default HomePage;