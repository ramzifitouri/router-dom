import { ADD_MOVIE, FILTER_MOVIES } from './actions';
import { combineReducers } from 'redux';

// Exemple de films initiaux
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur qui s'infiltre dans les rêves des autres pour voler leurs secrets les plus profonds.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 4.8,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description: "Deux hommes emprisonnés se lient pendant plusieurs années, trouvant réconfort et rédemption à travers des actes de décence commune.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 4.9,
    trailerLink: "https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "Batman, Gordon et Harvey Dent s'associent pour démanteler le crime organisé à Gotham, mais se retrouvent confrontés au Joker, un criminel anarchiste.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 4.7,
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY"
  }
];

const initialState = {
  movies: initialMovies,
  filteredMovies: initialMovies,
  filter: {
    title: '',
    rating: 0
  }
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const updatedMovies = [...state.movies, action.payload];
      return {
        ...state,
        movies: updatedMovies,
        filteredMovies: filterMoviesByRatingAndTitle(updatedMovies, state.filter)
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filter: action.payload.filter,
        filteredMovies: filterMoviesByRatingAndTitle(state.movies, action.payload.filter)
      };
    default:
      return state;
  }
};

// Fonction utilitaire pour filtrer les films
const filterMoviesByRatingAndTitle = (movies, filter) => {
  return movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesRating = movie.rating >= filter.rating;
    return matchesTitle && matchesRating;
  });
};

export default combineReducers({
  movies: moviesReducer
});
