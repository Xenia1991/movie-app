import React from 'react';
import { Online, Offline } from 'react-detect-offline';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import Loader from '../loader';
import AlertError from '../alert-error';
import InputSearch from '../input-search';
import PaginationList from '../pagination';

import './app.css';

class App extends React.Component {
  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
    genresList: [],
    inputValue: '',
    isLoading: true,
    isError: false,
    totalMovies: null,
  };

  componentDidMount() {
    this.getMovieInfo();
    this.getMoviesGenres();
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state;
    if (inputValue !== prevState.inputValue) {
      this.getMovieInfo();
      this.getMoviesGenres();
    }
  }

  onError = () => {
    this.setState({
      isLoading: false,
      isError: true,
    });
  };

  getInputValue = (e) => {
    this.setState(() => ({
      inputValue: e.trim(),
    }));
  };

  getMovieInfo = (page = 1) => {
    const { inputValue } = this.state;
    const url = `?query=${inputValue}&include_adult=false&language=en-US&page=${page}`;
    this.movieApiServices
      .getMovie(url)
      .then((movies) => {
        const { results, total_results } = movies;
        this.setState(() => ({
          movieList: results,
          isLoading: false,
          totalMovies: total_results,
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
    const { movieList, genresList, isLoading, isError, inputValue, totalMovies } = this.state;
    const movieCard =
      !isLoading && !isError ? <MovieList movieList={movieList} genresList={genresList} value={inputValue} /> : null;
    const loaderSpin = isLoading ? <Loader /> : null;
    const errorAlert = isError && !isLoading ? <AlertError /> : null;
    const pollingOptions = {
      interval: 90000,
    };

    return (
      <section className="app">
        <section className="input-search-section">
          <InputSearch value={inputValue} onChange={this.getInputValue} />
        </section>
        <section className="movie-list-section">
          <Online polling={pollingOptions}>
            {movieCard}
            {loaderSpin}
            {errorAlert}
          </Online>
          <Offline polling={pollingOptions}>
            <AlertError />
          </Offline>
        </section>
        <section className="pagination-section">
          <PaginationList totalMovies={totalMovies} getPage={this.getMovieInfo} />
        </section>
      </section>
    );
  }
}

export default App;
