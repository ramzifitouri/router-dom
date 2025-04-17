export const ADD_MOVIE = 'ADD_MOVIE';
export const FILTER_MOVIES = 'FILTER_MOVIES';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie
});

export const filterMovies = (filter) => ({
  type: FILTER_MOVIES,
  payload: { filter }
});

