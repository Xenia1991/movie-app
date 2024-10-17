import React from 'react';
import { Pagination } from 'antd';

import './pagination.css';

class PaginationList extends React.Component {
  handleChange = (page) => {
    const { getPage } = this.props;
    getPage(page);
    window.scrollTo(0, 0);
  };

  render() {
    const { totalMovies } = this.props;
    return (
      <div className="pagination">
        <Pagination
          align="center"
          defaultCurrent={1}
          pageSize={20}
          total={totalMovies}
          showSizeChanger={false}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default PaginationList;
