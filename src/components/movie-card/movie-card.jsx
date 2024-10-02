import React from 'react';
import { Card, Space, Typography } from 'antd';

import './movie-card.css';

const { Title, Text } = Typography;

class MovieCard extends React.Component {
  render() {
    return (
      <Card hoverable className="movie-card">
        <Space direction="horizontal" className="movie-card__first-space">
          <img
            className="movie-card__poster"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <Space direction="vertical" className="movie-card__second-space">
            <section className="movie-card__description">
              <Title level={4} className="movie-card__name">
                Iron Man
              </Title>
              <Text type="secondary" className="movie-card__date">
                March 5, 2020
              </Text>
              <p>
                <Text code> Action </Text>
                <Text code> Drama </Text>
              </p>
              <p>
                Это описание фильма, обычно оно очень длинное и должно занимать практически половину пространства,
                которое заложено для описания фильма, поэтому сюда я напишу побольше текста и прибвавлю еще так как ме
                надо срочно посмотреть как будет вести себя текст при таком случае. Надеюсь, что все будет хорошо и я
                пойду есть блины.
              </p>
            </section>
          </Space>
        </Space>
      </Card>
    );
  }
}

export default MovieCard;
