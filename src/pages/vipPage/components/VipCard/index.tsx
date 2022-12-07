import React, { Component } from 'react';
import { Button, Modal, notification } from 'antd';
// import { userDataType } from '../../types';
import './styles.scss';
import { changeBalance, levelUp } from 'store/index/actions';
import { connect } from 'react-redux';

interface IProps{
  vipLevel:number;
  handleLevelUp:(vipLevel:number)=>void;
  payVIP:(newBalance:number)=>void;
  balance:number;
  history:any;
}

interface IStates{
  modalOpen:boolean;
}

class VipCard extends Component<IProps, IStates> {
  state = {
    modalOpen: false,
  }

  showModal = (balance:number, charge:number) => {
    if (balance < charge) {
      this.error();
    } else {
      this.setState({
        modalOpen: true,
      });
    }
  };

  error = () => {
    const { history } = this.props;
    setTimeout(() => {
      history.push('/top_up');
    }, 1000);
    notification.error({
      message: '请充值',
      description: '账户余额不足',
    });
  };

  handleOk = (vipLevel: number, newBalance:number) => {
    const { handleLevelUp, payVIP } = this.props;
    payVIP(newBalance);
    handleLevelUp(vipLevel);
    this.setState({
      modalOpen: false,
    });
  };

  handleCancel = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const { vipLevel, balance } = this.props;
    const { modalOpen } = this.state;
    return (
      <div className="vip-card-component-box">
        <div className="vip-card vip-card-current">
          <div className={`icon iconfont icon-vip${vipLevel}`} />
        </div>
        <div className="arrow">
          <Button type="primary" size="large" onClick={() => this.showModal(balance, 1000)} disabled={vipLevel >= 5}>
            {`升级${' =>'}`}
          </Button>
        </div>
        <div className="vip-card vip-card-next">
          {
            vipLevel >= 5 ? (
              <div className="icon iconfont icon-vip5" />
            ) : (
              <div className={`icon iconfont icon-vip${vipLevel + 1}`} />
            )
          }
        </div>
        <Modal
          title="VIP升级"
          open={modalOpen}
          okText="确认"
          cancelText="取消"
          onOk={() => this.handleOk(vipLevel, balance - 1000)}
          onCancel={this.handleCancel}
        >
          <p>升级需花费：1000元</p>
          <p>
            账户余额:
            {balance}
          </p>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleLevelUp: (vipLevel: number) => dispatch(levelUp(vipLevel)),
    payVIP: (newBalance:number) => dispatch(changeBalance(newBalance)),
  };
}

export default connect(null, mapDispatchToProps)(VipCard);
