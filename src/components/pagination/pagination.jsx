import React from 'react';
import { Pagination } from 'antd';

class PaginationList extends React.Component {
  render() {
    const { totalMovies, getPage } = this.props;

    return (
      <Pagination
        align="center"
        defaultCurrent={1}
        pageSize={20}
        total={totalMovies}
        showSizeChanger={false}
        onChange={getPage}
      />
    );
  }
}

export default PaginationList;
