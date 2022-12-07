import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { observer, Provider } from 'mobx-react';
import { connect } from 'react-redux';
import Header from '@components/Header';
import Footer from '@components/Footer';
import DataChart from '@components/DataChart';
import { addToTable } from 'store/index/actions';
import Account from './components/Account';
import UserPortrait from './components/UserPortrait';
import WaveAnalysis from './components/WaveAnalysis';
import AutoModal from './components/AutoModal';
import promotionStore from './promotionData.store';
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

interface userDataType {
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
}

interface IProps extends RouteComponentProps{
  userData:userDataType;
  dataSource:any[];
  addTo:(row:any)=>void;
}

@observer
class PromotionDataPage extends Component<IProps, any> {
  state = {}

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    promotionStore.getExpiredPlanList();
  }

  handleAutoModalClick = (type: number, values?: any) => {
    promotionStore.modalShow = false;
    // const { modalShow } = this.state;
    // this.setState({
    //   modalShow: !modalShow,
    // });
  }

  render() {
    const {
      history, userData, dataSource, addTo,
    } = this.props;
    const {
      name, status, balance, creditValue, vipLevel,
    } = userData;
    // const { modalShow } = this.state;
    const { modalShow } = promotionStore;
    return (
      <Provider store={promotionStore}>
        <div className="promotion-data-page-box">
          <div className="header">
            <Header history={history} username={name} />
          </div>
          <div className="content">
            <div className="account-area">
              <Account
                name={name}
                status={status}
                balance={balance}
                creditValue={creditValue}
                vipLevel={vipLevel}
              />
            </div>
            <div className="data-chart-area">
              <DataChart cardData={cardData} />
            </div>
            <div className="wave-analysis-area">
              <WaveAnalysis dataSource={dataSource} addToTable={addTo} />
            </div>
            <div className="user-portrait-area">
              <UserPortrait />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
          <AutoModal
            visible={false}
            onBtnClick={this.handleAutoModalClick}
          />
        </div>
      </Provider>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userData: state.indexData.userData,
    dataSource: state.indexData.dataSource,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addTo: (row:any) => dispatch(addToTable(row)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionDataPage);
