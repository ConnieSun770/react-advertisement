import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { RouteComponentProps } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import VipCard from './components/VipCard';
import { userDataType } from './types';

interface IProps extends RouteComponentProps{
  userData:userDataType;
}

interface IStates{}

class VipPage extends Component<IProps, IStates> {
  render() {
    const { history, userData } = this.props;
    const {
      name, status, vipLevel, creditValue, balance, avatar,
    } = userData;
    return (
      <div className="vip-page-components-box">
        <div className="header-box">
          <Header username="Connie Sun" history={history} avatar={avatar} />
        </div>
        <div className="content-box">
          <div className="user-info-area">
            <UserInfo
              name={name}
              status={status}
              vipLevel={vipLevel}
              creditValue={creditValue}
              balance={balance}
              avatar={avatar}
            />
          </div>
          <div className="vip-info-area">
            <VipCard balance={balance} vipLevel={vipLevel} history={history} />
          </div>
        </div>
        <div className="footer-box">
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userData: state.indexData.userData,
  };
}

export default connect(mapStateToProps)(VipPage);
