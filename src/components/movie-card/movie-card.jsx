/* eslint-disable no-nested-ternary */
import React from 'react';
import { Card, Space, Typography, Badge } from 'antd';
import { format } from 'date-fns';

import Raiting from '../raiting';

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

  getCuttedTitle = () => {
    const { item } = this.props;
    const cuttedTitle = item.title.split('');
    if (item.title.length >= 20) {
      const newTitle = `${cuttedTitle.slice(0, 20).join('')}...`;
      return newTitle;
    }
    return cuttedTitle.join('');
  };

  render() {
    const { item, onRate } = this.props;
    const formatDate = this.getDateFormat();
    const genresCollection = this.getGenresNames().map((genre) => <Badge key={genre} count={genre} color="cyan" />);
    const overview = this.getCuttedDescription();
    const title = this.getCuttedTitle();
    const { vote_average, poster_path, id } = item;
    const rateStyles = {
      base: 'movie-card__rate',
      lowest: 'movie-card__rate--lowest',
      low: 'movie-card__rate--low',
      middle: 'movie-card__rate--middle',
      high: 'movie-card__rate--high',
    };
    return (
      <Card hoverable className="movie-card">
        <Space direction="horizontal" className="movie-card__first-space">
          <img
            className="movie-card__poster"
            alt="example"
            src={item.poster_path === null ? defaultPoster : `${this.posterBase}${poster_path}`}
          />
          <Space direction="vertical" className="movie-card__second-space">
            <section className="movie-card__main-info">
              <div className="movie-card__title">
                <Title level={4} className="movie-card__name">
                  {title}
                </Title>
                <div
                  className={
                    vote_average < 3
                      ? `${rateStyles.base} ${rateStyles.lowest}`
                      : vote_average >= 3 && vote_average < 5
                        ? `${rateStyles.base} ${rateStyles.low}`
                        : vote_average >= 5 && vote_average < 7
                          ? `${rateStyles.base} ${rateStyles.middle}`
                          : `${rateStyles.base} ${rateStyles.high}`
                  }
                >
                  {vote_average.toFixed(1)}
                </div>
              </div>
              <Text type="secondary" className="movie-card__date">
                {formatDate}
              </Text>
              <p className="movie-card__genre">{genresCollection}</p>
              <Text className="movie-card__description">{overview}</Text>
              <Raiting id={id} onRate={onRate} />
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
