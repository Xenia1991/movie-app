import React from 'react';
import { Pagination } from 'antd';

import './pagination.css';

class PaginationList extends React.Component {
  render() {
    const { totalMovies, getPage } = this.props;

    return (
      <div className="pagination">
        <Pagination
          align="center"
          defaultCurrent={1}
          pageSize={20}
          total={totalMovies}
          showSizeChanger={false}
          onChange={getPage}
        />
      </div>
    );
  }
}

export default PaginationList;
