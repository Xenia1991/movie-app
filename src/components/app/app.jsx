import React from 'react';
import { Online, Offline } from 'react-detect-offline';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import Loader from '../loader';
import AlertError from '../alert-error';

import './app.css';

class App extends React.Component {
  query = 'Anna';

  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
    genresList: [],
    isLoading: true,
    isError: false,
  };

  constructor() {
    super();
    this.getMovieInfo();
    this.getMoviesGenres();
  }

  onError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  getMovieInfo = () => {
    const url = `?query=${this.query}&include_adult=false&language=en-US&page=1`;

    this.movieApiServices
      .getMovie(url)
      .then((movies) => {
        const { results } = movies;
        this.setState(() => ({
          movieList: results,
          isLoading: false,
        }));
      })
      .catch(() => this.onError());
  };

  getMoviesGenres = () => {
    this.movieApiServices
      .getGenres()
      .then((genre) => {
        const { genres } = genre;
        const transformedGenres = {};
        genres.forEach((item) => {
          transformedGenres[item.id] = item.name;
        });
        this.setState(() => ({
          genresList: transformedGenres,
        }));
      })
      .catch(() => this.onError());
  };

  render() {
    const { movieList, genresList, isLoading, isError } = this.state;
    const movieCard = !isLoading && !isError ? <MovieList movieList={movieList} genresList={genresList} /> : null;
    const loaderSpin = isLoading ? <Loader /> : null;
    const errorAlert = isError && !isLoading ? <AlertError /> : null;
    const pollingOptions = {
      url: 'https://httpbin.org/get',
      interval: 90000,
    };

    return (
      <section className="app">
        <Online polling={pollingOptions}>
          {movieCard}
          {loaderSpin}
          {errorAlert}
        </Online>
        <Offline polling={pollingOptions}>
          <AlertError />
        </Offline>
      </section>
    );
  }
}

export default App;
