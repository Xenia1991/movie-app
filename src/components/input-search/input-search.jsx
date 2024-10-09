import React from 'react';
import { Input } from 'antd';

import './input-search.css';

class InputSearch extends React.Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    return <Input placeholder="Type to search..." size="large" onChange={this.handleChange} />;
  }
}

export default InputSearch;
