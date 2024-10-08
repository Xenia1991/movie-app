import React from 'react';
import { Card, Space, Typography, Badge } from 'antd';
import { format } from 'date-fns';

import './movie-card.css';
import defaultPoster from './no_poster.jpg';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  posterBase = 'https://image.tmdb.org/t/p/w500';

  getDateFormat = () => {
    const { item } = this.props;
    const numberedDatesArr = item.release_date
      .split('-')
      .map((date) => Number(date))
      .join(' ');
    const formatDate = format(new Date(numberedDatesArr), 'MMMM dd, uuuu');
    return formatDate;
  };

  getGenresNames = () => {
    const { item, genres } = this.props;
    const genreNames = item.genre_ids.map((id) => genres[id]);
    return genreNames;
  };

  getCuttedDescription = () => {
    const { item } = this.props;
    const cuttedOverview = item.overview.split('');
    if (item.overview.length >= 130) {
      const newOverview = `${cuttedOverview.slice(0, 130).join('')}...`;
      return newOverview;
    }
    return item.overview;
  };

  render() {
    const { item } = this.props;
    const formatDate = this.getDateFormat();
    const genresCollection = this.getGenresNames().map((genre) => <Badge key={genre} count={genre} color="cyan" />);
    const overview = this.getCuttedDescription();
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
              <Title level={5} className="movie-card__name">
                {item.title}
              </Title>
              <Text type="secondary" className="movie-card__date">
                {formatDate}
              </Text>
              <p className="movie-card__genre">{genresCollection}</p>
              <Text className="movie-card__description">{overview}</Text>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
