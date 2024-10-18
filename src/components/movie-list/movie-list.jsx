import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import AlertEmpty from '../alert-empty';
import { MovieConsumer } from '../context';

import './movie-list.css';

class MovieList extends React.Component {
  render() {
    const { movieList, ratedMovies, isInitial, onRate } = this.props;
    const emptyAlert = isInitial || movieList.length !== 0 ? null : <AlertEmpty />;
    const movies =
      movieList.length !== 0 ? (
        <List
          grid={{
            gutter: 16,
          }}
          dataSource={movieList}
          renderItem={(item) => (
            <List.Item>
              <MovieConsumer>
                {(genresList) => (
                  <MovieCard item={item} ratedMovies={ratedMovies} genres={genresList} onRate={onRate} />
                )}
              </MovieConsumer>
            </List.Item>
          )}
        />
      ) : null;
    return (
      <div>
        {movies}
        {emptyAlert}
      </div>
    );
  }
}

export default MovieList;
