import React, { Component } from 'react';
import moment from 'moment';
import { observer, Provider } from 'mobx-react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import './style.scss';
import { DatePicker, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Footer from '@components/Footer';
import DataChartIndex from '@components/DataChartIndex';
import { ThemeContext, ThemeType } from 'context/theme';
import { getUserBalance } from 'store/index/actions';
import CardArea from './components/CardArea/index';
import ProductCard from './components/ProductCard';
import Account from './components/Account';
import IndexBanner from './components/IndexBanner';
import ProductNews from './components/ProductNews';
import indexDataStore from './indexData.store';

interface userDataType {
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
  avatar:string;
}

interface Props extends RouteComponentProps{
  getUser:()=>void;
  userData:userDataType;
}

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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
    const { history, userData } = this.props;
    const {
      name, balance, creditValue, status, vipLevel, avatar,
    } = userData;
    const { theme } = this.state;
    return (
      // <ThemeContext.Provider value={theme}>
      <Provider store={indexDataStore}>
        <div className="index-page">
          <div className="header-box">
            <Header history={history} username={name} avatar={avatar} />
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
                <CardArea history={history} vipLevel={vipLevel} />
              </div>
              <div className="product-card-area">
                <ProductCard history={history} />
              </div>
            </div>
            <div className="right-content">
              <div className="account-area">
                <Account
                  name={name}
                  balance={balance}
                  creditValue={creditValue}
                  status={status}
                  vipLevel={vipLevel}
                  history={history}
                />
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

function mapStateToProps(state: any) {
  return {
    userData: state.indexData.userData,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    getUser: () => dispatch(getUserBalance()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
