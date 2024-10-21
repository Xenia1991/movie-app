import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import MovieCardMobile from '../movie-card-mobile/movie-card-mobile';
import AlertEmpty from '../alert-empty';
import { MovieConsumer } from '../context';

import './movie-list.css';

class MovieList extends React.Component {
  render() {
    const { movieList, ratedMovies, isInitial, onRate, innerWidth } = this.props;
    const emptyAlert = isInitial || movieList.length !== 0 ? null : <AlertEmpty />;
    const movies =
      movieList.length !== 0 && innerWidth >= 980 ? (
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
      ) : (
        <List
          grid={{
            gutter: 16,
          }}
          dataSource={movieList}
          renderItem={(item) => (
            <List.Item>
              <MovieConsumer>
                {(genresList) => (
                  <MovieCardMobile item={item} ratedMovies={ratedMovies} genres={genresList} onRate={onRate} />
                )}
              </MovieConsumer>
            </List.Item>
          )}
        />
      );
    return (
      <div className="movie-list-container">
        {movies}
        {emptyAlert}
      </div>
    );
  }
}

export default MovieList;
