import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Header from '@components/Header';
import './style.scss';
import { DatePicker, Select } from '_antd@4.24.4@antd';
import DataChart from './components/DataChart';
import CardArea from './components/CardArea';

interface Props {}

class IndexPage extends Component<Props> {
  componentDidMount() {
    axios.get('/ad/index/gray').then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleDateChange = (date: moment.Moment|null) => {
    console.log(moment(date).unix());
  }

  dateChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };

  selectChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div className="index-page">
        <div className="header-box">
          <Header />
        </div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">
              <div className="card-header">
                <div className="card-title">数据趋势</div>
                <div className="search-box">
                  <Select
                    defaultValue="全部推广产品"
                    style={{ width: 130 }}
                    onChange={this.selectChange}
                    options={[
                      { value: '0', label: '全部推广产品' },
                      { value: '1', label: '搜索推广' },
                      { value: '2', label: '一站式推广' },
                      { value: '3', label: '合约推广' },
                      { value: '4', label: '知识营销' },
                    ]}
                  />
                  <DatePicker onChange={this.dateChange} />
                </div>
              </div>
              <DataChart />
            </div>
            <div className="promotion-card-area">
              <CardArea />
            </div>
            <div className="product-card-area">product card</div>
          </div>
          <div className="right-content">
            <div className="account-area">account-area</div>
            <div className="banner-area">banner-area</div>
            <div className="product-news-area">product-news-area</div>
          </div>
        </div>
        <div className="footer-box">footer</div>
      </div>
    );
  }
}

export default IndexPage;
