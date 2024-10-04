import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import './movie-list.css';

class MovieList extends React.Component {
  render() {
    const { movieList } = this.props;
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
