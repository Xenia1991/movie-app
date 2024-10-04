import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import './movie-list.css';

class MovieList extends React.Component {
  render() {
    const { movieList, genresList } = this.props;

    return (
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
    );
  }
}

export default MovieList;
