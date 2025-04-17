import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../redux/actions';

const Filter = () => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitleFilter(newTitle);
    updateFilter(newTitle, ratingFilter);
  };

  const handleRatingChange = (e) => {
    const newRating = Number(e.target.value);
    setRatingFilter(newRating);
    updateFilter(titleFilter, newRating);
  };

  const updateFilter = (title, rating) => {
    dispatch(filterMovies({ title, rating }));
  };

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Titre du film</label>
          <input
            type="text"
            placeholder="Rechercher par titre..."
            value={titleFilter}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full md:w-48">
          <label className="block text-gray-700 mb-2">
            Note minimale: {ratingFilter}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={ratingFilter}
            onChange={handleRatingChange}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
