import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import MovieApiServices from '../../services/movie-api-services';

import './movie-list.css';

class MovieList extends React.Component {
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
    console.log(movieList);

    return (
      <List
        grid={{
          gutter: 16,
        }}
        dataSource={movieList}
        renderItem={(item) => (
          <List.Item>
            <MovieCard item={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default MovieList;
