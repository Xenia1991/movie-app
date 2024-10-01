import React from 'react';
import { Card } from 'antd';

import './movie-card.css';

const { Grid } = Card;

class MovieCard extends React.Component {
  render() {
    return (
      <Card hoverable className="movie-card">
        <Grid hoverable={false} className="poster" />
        <Grid hoverable={false} className="film-info" />
      </Card>
    );
  }
}

export default MovieCard;
