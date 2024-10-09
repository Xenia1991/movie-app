import React from 'react';
import { Alert } from 'antd';

class AlertEmpty extends React.Component {
  render() {
    return (
      <section className="alert-empty">
        <Alert type="info" message="Sorry! There is no movie with such name" />
      </section>
    );
  }
}

export default AlertEmpty;
