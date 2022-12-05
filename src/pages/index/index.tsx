import React, { Component } from 'react';
import moment from 'moment';
import { observer, Provider } from 'mobx-react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import './style.scss';
import { DatePicker, Select } from '_antd@4.24.4@antd';
import { SettingOutlined } from '@ant-design/icons';
import Footer from '@components/Footer';
import DataChartIndex from '@components/DataChartIndex';
import { ThemeContext, ThemeType } from 'context/theme';
import CardArea from './components/CardArea/index';
import ProductCard from './components/ProductCard';
import Account from './components/Account';
import IndexBanner from './components/IndexBanner';
import ProductNews from './components/ProductNews';
import indexDataStore from './indexData.store';

interface Props extends RouteComponentProps{}

interface States{
  theme:ThemeType;
}
@observer
class IndexPage extends Component<Props, States> {
  state = {
    theme: {
      buttonType: 'primary',
    },
  }

  componentDidMount() {
    // axios.get('/ad/index/gray').then((res) => {
    //   console.log(res.data);
    // }).catch((err) => {
    //   console.log(err);
    // });
    // eslint-disable-next-line no-multi-assign
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    indexDataStore.getUserBalance();
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

  handleContextChange = () => {
    const { theme } = this.state;
    const newButtonType = theme.buttonType === 'primary' ? 'default' : 'primary';
    this.setState({
      theme: {
        buttonType: newButtonType,
      },
    });
  }

  render() {
    const { history } = this.props;
    const { theme } = this.state;
    return (
      // <ThemeContext.Provider value={theme}>
      <Provider store={indexDataStore}>
        <div className="index-page">
          <div className="header-box">
            <Header history={history} />
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
                <DataChartIndex />
              </div>
              <div className="promotion-card-area">
                <CardArea history={history} />
              </div>
              <div className="product-card-area">
                <ProductCard />
              </div>
            </div>
            <div className="right-content">
              <div className="account-area">
                <Account />
              </div>
              <div className="banner-area">
                <IndexBanner />
              </div>
              <div className="product-news-area">
                <ProductNews />
              </div>
            </div>
          </div>
          <div className="footer-box">
            <Footer />
          </div>
          <div className="setting-btn">
            <SettingOutlined
              style={{ fontSize: 36, color: '#326fff' }}
              onClick={this.handleContextChange}
            />
          </div>
        </div>
      </Provider>
      // </ThemeContext.Provider>
    );
  }
}

export default IndexPage;
