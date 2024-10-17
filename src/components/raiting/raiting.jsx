/* eslint-disable prettier/prettier */
import React from 'react';
import { Rate } from 'antd';

class Raiting extends React.Component {
  handleChange = (value) => {
    const { onRate, id } = this.props;
    onRate(value, id);
  };

  render() {
    const { rate } = this.props;
    return <Rate count={10} allowHalf className="movie-card__stars" onChange={this.handleChange} defaultValue={rate} />;
  }
}

export default Raiting;
