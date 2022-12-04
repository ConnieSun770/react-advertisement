import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import DataChart from '@components/DataChart';
import Account from './components/Account';
import UserPortrait from './components/UserPortrait';
import WaveAnalysis from './components/WaveAnalysis';
import './styles.scss';

const cardData = [
  {
    id: '1',
    name: '消费（元）',
    value: 2000,
    percent: '',
    icon: 'assets/imgs/card-icon1',
    isSelected: true,
  },
  {
    id: '2',
    name: '展现（次）',
    value: 5988,
    percent: '',
    icon: 'assets/imgs/card-icon2',
    isSelected: false,
  },
  {
    id: '3',
    name: '点击（次）',
    value: 199,
    percent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
  {
    id: '4',
    name: '展现人数（人）',
    value: 20000,
    percent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
  {
    id: '5',
    name: '点击人数（人）',
    value: 8000,
    percent: '',
    icon: 'assets/imgs/card-icon3',
    isSelected: false,
  },
];

interface IProps extends RouteComponentProps{
}

class PromotionDataPage extends Component<IProps, any> {
  render() {
    return (
      <div className="promotion-data-page-box">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="account-area">
            <Account />
          </div>
          <div className="data-chart-area">
            <DataChart cardData={cardData} />
          </div>
          <div className="wave-analysis-area">
            <WaveAnalysis />
          </div>
          <div className="user-portrait-area">
            <UserPortrait />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PromotionDataPage;
