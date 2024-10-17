import React from 'react';
import { Tabs } from 'antd';

class Tab extends React.Component {
  items = [
    {
      key: '1',
      label: 'Search',
    },
    {
      key: '2',
      label: 'Rated',
    },
  ];

  onChange = (key) => {
    console.log(key);
  };

  render() {
    return <Tabs defaultActiveKey="1" items={this.items} onChange={this.onChange} centered />;
  }
}

export default Tab;
