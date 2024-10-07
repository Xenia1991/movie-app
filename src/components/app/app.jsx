import React from 'react';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import Loader from '../loader';
import './app.css';

class App extends React.Component {
  query = 'Prejudice';

  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
    genresList: [],
    isLoading: true,
  };

  constructor() {
    super();
    this.getMovieInfo();
    this.getMoviesGenres();
  }

  getMovieInfo = () => {
    const url = `?query=${this.query}&include_adult=false&language=en-US&page=1`;

    this.movieApiServices.getMovie(url).then((movies) => {
      const { results } = movies;
      this.setState(() => ({
        movieList: results,
        isLoading: false,
      }));
    });
  };

  getMoviesGenres = () => {
    this.movieApiServices.getGenres().then((genre) => {
      const { genres } = genre;
      const transformedGenres = {};
      genres.forEach((item) => {
        transformedGenres[item.id] = item.name;
      });
      this.setState(() => ({
        genresList: transformedGenres,
      }));
    });
  };

  render() {
    const { movieList, genresList, isLoading } = this.state;
    const movieCard = !isLoading ? <MovieList movieList={movieList} genresList={genresList} /> : null;
    const loaderSpin = isLoading ? <Loader /> : null;
    return (
      <section className="app">
        {movieCard}
        {loaderSpin}
      </section>
    );
  }
}

export default App;
