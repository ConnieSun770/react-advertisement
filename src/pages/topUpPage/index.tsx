import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import TOP_UP_LIST from 'common/constants/topUp';
import './styles.scss';
import { connect } from 'react-redux';

export interface userDataType {
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
  avatar:string;
}

interface IProps extends RouteComponentProps{
  userData:userDataType;
}

interface IStates{}

class TopUpPage extends Component<IProps, IStates> {
  render() {
    const { history, userData } = this.props;
    const { name } = userData;
    return (
      <div className="top-up-component-box">
        <div className="header-box">
          <Header history={history} username={name} />
        </div>
        <div className="top-up-title">充值中心</div>
        <div className="content-box">
          {
            TOP_UP_LIST.map((topUpItem) => (
              <div className="top-up-item-box">
                <div className="top-content">
                  <img className="icon" src="assets/imgs/card-icon1-selected.png" alt="icon" />
                  {topUpItem.topUpValue}
                </div>
                {
                  topUpItem.gift > 0 && <div className="tags">{`+${topUpItem.gift}`}</div>
                }
                <div className="bottom-content">
                  <div className="price-circle">
                    <div className="price">
                      {topUpItem.topUpValue}
                      <span className="unit">元</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
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

export default connect(mapStateToProps)(TopUpPage);
