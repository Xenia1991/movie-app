import React from 'react';
import { Card, Space, Typography } from 'antd';

import './movie-card.css';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  render() {
    const { item } = this.props;
    console.log(item.jenre[0]);
    return (
      <Card hoverable className="movie-card">
        <Space direction="horizontal" className="movie-card__first-space">
          <img className="movie-card__poster" alt="example" src={item.poster} />
          <Space direction="vertical" className="movie-card__second-space">
            <section className="movie-card__main-info">
              <Title level={4} className="movie-card__name">
                {item.name}
              </Title>
              <Text type="secondary" className="movie-card__date">
                {item.date}
              </Text>
              <p
                className="
              movie-card__genre"
              >
                <Text code>{item.jenre[0]}</Text>
                <Text code>{item.jenre[1]}</Text>
              </p>
              <Text className="movie-card__description">{item.description}</Text>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
