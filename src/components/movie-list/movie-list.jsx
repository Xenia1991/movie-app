import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import AlertEmpty from '../alert-empty';

import './movie-list.css';

class MovieList extends React.Component {
  render() {
    const { movieList, genresList, isInitial } = this.props;
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
              <MovieCard item={item} genres={genresList} />
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
