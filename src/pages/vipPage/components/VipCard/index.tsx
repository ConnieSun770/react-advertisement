import React, { Component } from 'react';
import { Button, Modal, notification } from 'antd';
// import { userDataType } from '../../types';
import VIP_LIST from 'common/constants/vipInfo';
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
    const currentVip = VIP_LIST[vipLevel - 1];
    const nextVip = VIP_LIST[vipLevel];
    return (
      <div className="vip-card-component-box">
        {
          vipLevel && (
            <div className="vip-card vip-card-current" style={{ border: `6px solid ${currentVip.color}` }}>
              <div className={`icon iconfont icon-vip${vipLevel}`} />
              <div className="row">
                <div className="label-text">当前推广功能:</div>
                <div className="value-text">
                  {currentVip.description}
                </div>
              </div>
              <div className="row">
                <div className="label-text">推广效果:</div>
                <div className="value-text">{`增加${vipLevel * 10}%`}</div>
              </div>
            </div>
          )
        }
        <div className="arrow">
          <Button type="primary" size="large" onClick={() => this.showModal(balance, 1000)} disabled={vipLevel >= 5}>
            {vipLevel >= 5 ? '最高级' : `升级${' =>'}`}
          </Button>
        </div>
        {
          vipLevel && (vipLevel >= 5 ? (
            <div className="vip-card vip-card-current" style={{ border: `6px solid ${VIP_LIST[4].color}` }}>
              <div className="icon iconfont icon-vip5" />
              <div className="row">
                <div className="label-text">当前推广功能:</div>
                <div className="value-text">
                  {VIP_LIST[4].description}
                </div>
              </div>
              <div className="row">
                <div className="label-text">推广效果:</div>
                <div className="value-text">{`增加${5 * 10}%`}</div>
              </div>
            </div>
          ) : (
            <div className="vip-card vip-card-current" style={{ border: `6px solid ${nextVip.color}` }}>
              <div className={`icon iconfont icon-vip${vipLevel + 1}`} />
              <div className="row">
                <div className="label-text">{`VIP${vipLevel}推广功能:`}</div>
                <div className="value-text">
                  {currentVip.description}
                </div>
              </div>
              <div className="row">
                <div className="label-text">新增功能:</div>
                <div className="value-text">
                  {nextVip.new}
                </div>
              </div>
              <div className="row">
                <div className="label-text">推广效果:</div>
                <div className="value-text">{`增加${(vipLevel + 1) * 10}%`}</div>
              </div>
            </div>
          ))
        }
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
            账户余额：
            {balance}
            元
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
