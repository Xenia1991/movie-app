import React from 'react';
import { List } from 'antd';

import MovieCard from '../movie-card/movie-card';

import './movie-list.css';
import poster from './poster.jpg';
import teacher from './teacher.jpg';
import aviator from './aviator.jpg';

class MovieList extends React.Component {
  data = [
    {
      name: 'Good movie',
      date: 'May 15, 1975',
      poster: aviator,
      jenre: ['drama', 'fantasy'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Bad movie',
      date: 'Nov 13, 1999',
      poster: teacher,
      jenre: ['crime', 'horror'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Strange movie',
      date: 'Nov 13, 1999',
      poster,
      jenre: ['bio', 'psyco'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Foo movie',
      date: 'Mar 22, 1987',
      poster: aviator,
      jenre: ['bio', 'psyco'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Horror movie',
      date: 'Nov 13, 1999',
      poster,
      jenre: ['horror', 'gghhj'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  render() {
    return (
      <List
        grid={{
          gutter: 16,
        }}
        dataSource={this.data}
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
