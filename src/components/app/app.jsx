import React from 'react';
import { Online, Offline } from 'react-detect-offline';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import Loader from '../loader';
import AlertError from '../alert-error';
import Tab from '../tab';
import InputSearch from '../input-search';
import PaginationList from '../pagination';

import './app.css';

class App extends React.Component {
  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
    genresList: [],
    inputValue: '',
    isLoading: false,
    isError: false,
    totalMovies: null,
    isInitialLoad: true,
    guestSessionId: null,
  };

  componentDidMount() {
    this.getGuestSessionId();
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state;
    if (inputValue !== prevState.inputValue) {
      this.setState({ isLoading: true });
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

  getGuestSessionId = () => {
    const url = 'authentication/guest_session/new';
    this.movieApiServices.createGuestSession(url).then((data) => {
      const { guest_session_id } = data;
      this.setState({
        guestSessionId: guest_session_id,
      });
    });
  };

  getMovieInfo = (page = 1) => {
    const { inputValue } = this.state;
    const url = `search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${page}`;
    this.movieApiServices
      .getMovie(url)
      .then((movies) => {
        const { results, total_results } = movies;
        this.setState(() => ({
          movieList: results,
          isLoading: false,
          totalMovies: total_results,
          isInitialLoad: false,
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
    const pollingOptions = {
      interval: 90000,
    };
    const { movieList, genresList, isLoading, isError, inputValue, totalMovies, isInitialLoad, guestSessionId } =
      this.state;
    const movieCard =
      !isLoading && !isError ? (
        <MovieList movieList={movieList} genresList={genresList} value={inputValue} isInitial={isInitialLoad} />
      ) : null;
    const loaderSpin = isLoading ? <Loader /> : null;
    const errorAlert = isError && !isLoading ? <AlertError /> : null;
    const pages =
      !isLoading && !isError && totalMovies ? (
        <PaginationList totalMovies={totalMovies} getPage={this.getMovieInfo} />
      ) : null;
    console.log(guestSessionId);
    return (
      <section className={movieList.length === 0 ? 'app' : 'app-fulfilled'}>
        <section className="tab-section">
          <Tab />
        </section>
        <section className="input-search-section">
          <InputSearch value={inputValue} onChange={this.getInputValue} />
        </section>
        <section className="movie-list-section">
          <Online polling={pollingOptions}>
            {movieCard}
            {loaderSpin}
            {errorAlert}
          </Online>
          <Offline polling={pollingOptions}>{errorAlert}</Offline>
        </section>
        <section className="pagination-section">{pages}</section>
      </section>
    );
  }
}

export default App;
