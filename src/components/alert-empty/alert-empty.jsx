import React from 'react';
import { Alert } from 'antd';

import './alert-empty.css';

class AlertEmpty extends React.Component {
  render() {
    return (
      <div className="alert-empty">
        <Alert type="info" message="Sorry! There is no movie with such name" />
      </div>
    );
  }
}

export default AlertEmpty;
