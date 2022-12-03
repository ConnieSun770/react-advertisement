import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './styles.scss';

interface IProps extends RouteComponentProps{
}

class PromotionDataPage extends Component<IProps, any> {
  render() {
    return (
      <div className="promotion-data-page-box">
        <div className="header">header</div>
        <div className="content">
          <div className="account-area">account-area</div>
          <div className="data-chart-area">data-chart-area</div>
          <div className="wave-analysis-area">wave-analysis-area</div>
          <div className="user-portrait-area">user-portrait-area</div>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
}

export default PromotionDataPage;
