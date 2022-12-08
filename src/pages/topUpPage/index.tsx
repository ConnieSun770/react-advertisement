import React, { Component } from 'react';
import {
  Modal, message,
} from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import TOP_UP_LIST from 'common/constants/topUp';
import './styles.scss';
import { connect } from 'react-redux';
import { addToTable, changeBalance } from 'store/index/actions';

export interface userDataType {
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
  avatar:string;
}

interface topUpType{
  id:number;
  topUpValue:number;
  gift:number;
}

interface IProps extends RouteComponentProps{
  userData:userDataType;
  topUp:(newBalance:number)=>void;
}

interface IStates{
  isTopUpModal:boolean;
  currentTopUp:topUpType ;
}

class TopUpPage extends Component<IProps, IStates> {
  state = {
    isTopUpModal: false,
    currentTopUp: { id: 0, topUpValue: 0, gift: 0 },
  }

  handleTopUpClick = (current: topUpType) => {
    this.setState({
      currentTopUp: current,
      isTopUpModal: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isTopUpModal: false,
    });
    this.messageBox({
      type: 'error',
      content: '本次充值已被取消',
    });
  }

  handelOk = () => {
    const { topUp } = this.props;
    const { currentTopUp } = this.state;
    const { gift, topUpValue } = currentTopUp;
    topUp(gift + topUpValue);
    this.setState({
      isTopUpModal: false,
    });
    this.messageBox({
      type: 'success',
      content: `充值获得${gift + topUpValue}元`,
    });
  }

  messageBox = (content: any) => {
    message.open(content).then((r) => {
      console.log(r);
    });
  };

  render() {
    const { history, userData } = this.props;
    const { name } = userData;
    const { isTopUpModal, currentTopUp } = this.state;
    return (
      <div className="top-up-component-box">
        <div className="header-box">
          <Header history={history} username={name} />
        </div>
        <div className="top-up-title">充值中心</div>
        <div className="content-box">
          {
            TOP_UP_LIST.map((topUpItem, index) => (
              <div
                className="top-up-item-box"
                onClick={() => this.handleTopUpClick(topUpItem)}
                key={`top-up-item-${index.toString()}`}
              >
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
        <Modal
          title={`充值${currentTopUp.topUpValue}`}
          open={isTopUpModal}
          onOk={this.handelOk}
          onCancel={this.handleCancel}
          className="auto-modal"
          okText="确定"
          cancelText="暂不充值"
        >
          <p>
            充值花费：
            { currentTopUp.topUpValue}
            元
          </p>
          <p>
            总共获得：
            { currentTopUp.topUpValue + currentTopUp.gift}
            元
          </p>
        </Modal>
      </div>
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
    topUp: (addBalance:number) => dispatch(changeBalance(addBalance)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUpPage);
