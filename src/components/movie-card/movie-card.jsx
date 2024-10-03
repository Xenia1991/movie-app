import React from 'react';
import { Card, Space, Typography } from 'antd';

import './movie-card.css';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  render() {
    const { item } = this.props;
    console.log(item);

    return (
      <Card hoverable className="movie-card">
        <Space direction="horizontal" className="movie-card__first-space">
          <img className="movie-card__poster" alt="example" src={item.poster_path} />
          <Space direction="vertical" className="movie-card__second-space">
            <section className="movie-card__main-info">
              <Title level={4} className="movie-card__name">
                {item.title}
              </Title>
              <Text type="secondary" className="movie-card__date">
                {item.release_date}
              </Text>
              <p
                className="
              movie-card__genre"
              >
                <Text code>{item.jenre}</Text>
                <Text code>{item.jenre}</Text>
              </p>
              <Text className="movie-card__description">{item.overview}</Text>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
