import React from 'react';

import MovieList from '../movie-list';
import MovieApiServices from '../../services/movie-api-services';
import './app.css';

class App extends React.Component {
  movieApiServices = new MovieApiServices();

  state = {
    movieList: [],
  };

  constructor() {
    super();
    this.getMovieInfo();
  }

  getMovieInfo = () => {
    const url = '?query=Twilight&include_adult=false&language=en-US&page=1';
    this.movieApiServices.getMovie(url).then((movies) => {
      const { results } = movies;
      this.setState({
        movieList: results,
      });
    });
  };

  render() {
    const { movieList } = this.state;
    return (
      <section className="app">
        <MovieList movieList={movieList} />
      </section>
    );
  }
}

export default App;
