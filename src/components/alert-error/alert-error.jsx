import React from 'react';
import { Alert } from 'antd';

import './alert-error.css';

class AlertError extends React.Component {
  render() {
    return (
      <div className="alert-error">
        <Alert
          message="Oops! :("
          description="Something unexpectable happens. Check your internet connection or try again later!"
          type="warning"
        />
      </div>
    );
  }
}

export default AlertError;
