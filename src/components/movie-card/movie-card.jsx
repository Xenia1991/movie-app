import React from 'react';
import { Card, Space, Typography } from 'antd';

import './movie-card.css';
import defaultPoster from './no_poster.jpg';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  posterBase = 'https://image.tmdb.org/t/p/w500';

  render() {
    const { item } = this.props;
    console.log(item.genre_ids);

    const genres = item.genre_ids.map((genre) => <Text code>{genre}</Text>);
    return (
      <Card hoverable className="movie-card">
        <Space direction="horizontal" className="movie-card__first-space">
          <img
            className="movie-card__poster"
            alt="example"
            src={item.poster_path === null ? defaultPoster : `${this.posterBase}${item.poster_path}`}
          />
          <Space direction="vertical" className="movie-card__second-space">
            <section className="movie-card__main-info">
              <Title level={4} className="movie-card__name">
                {item.title}
              </Title>
              <Text type="secondary" className="movie-card__date">
                {item.release_date}
              </Text>
              <p className="movie-card__genre">{genres}</p>
              <Text className="movie-card__description">{item.overview}</Text>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
