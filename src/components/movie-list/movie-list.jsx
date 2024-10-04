import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';
import './movie-list.css';

class MovieList extends React.Component {
  getKey = () => Math.floor(Math.random() * 1000);

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
          <List.Item key={this.getKey()}>
            <MovieCard item={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default MovieList;
