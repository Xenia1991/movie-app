import React from 'react';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import './app.css';

class App extends React.Component {
  query = 'River';

  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
    genresList: [],
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
      this.setState({
        movieList: results,
      });
    });
  };

  getMoviesGenres = () => {
    this.movieApiServices.getGenres().then((genre) => {
      const { genres } = genre;
      const transformedGenres = {};
      genres.forEach((item) => {
        transformedGenres[item.id] = item.name;
      });
      this.setState({
        genresList: transformedGenres,
      });
    });
  };

  render() {
    const { movieList, genresList } = this.state;
    return (
      <section className="app">
        <MovieList movieList={movieList} genresList={genresList} />
      </section>
    );
  }
}

export default App;
