import React from 'react';
import { Card, Space, Typography } from 'antd';
import { format } from 'date-fns';

import './movie-card.css';
import defaultPoster from './no_poster.jpg';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  posterBase = 'https://image.tmdb.org/t/p/w500';

  getKey = () => Math.floor(Math.random() * 1000);

  render() {
    const { item } = this.props;
    const numberedDatesArr = item.release_date
      .split('-')
      .map((date) => Number(date))
      .join(' ');
    const formatDate = format(new Date(numberedDatesArr), 'MMMM dd, uuuu');

    const genres = item.genre_ids.map((genre) => <Text code>{genre}</Text>);
    return (
      <Card hoverable className="movie-card" key={this.getKey()}>
        <Space direction="horizontal" className="movie-card__first-space" key={this.getKey()}>
          <img
            className="movie-card__poster"
            alt="example"
            src={item.poster_path === null ? defaultPoster : `${this.posterBase}${item.poster_path}`}
            key={this.getKey()}
          />
          <Space direction="vertical" className="movie-card__second-space" key={this.getKey()}>
            <section className="movie-card__main-info" key={this.getKey()}>
              <Title level={4} className="movie-card__name" key={this.getKey()}>
                {item.title}
              </Title>
              <Text type="secondary" className="movie-card__date" key={this.getKey()}>
                {formatDate}
              </Text>
              <p className="movie-card__genre" key={this.getKey()}>
                {genres}
              </p>
              <Text className="movie-card__description" key={this.getKey()}>
                {item.overview}
              </Text>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
