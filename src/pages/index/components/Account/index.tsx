import React, { Component } from 'react';
import './styles.scss';
import { Button } from 'antd';
import { ThemeContext, ThemeType } from 'context/theme';
import { inject, observer } from '_mobx-react@7.6.0@mobx-react';

interface IProps{
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
  store?:any;
  history:any;
}

interface IStates{
  // name:string;
  // status:number;
  // balance:number;
  // creditValue:number;
}

@inject('store')
@observer
class Account extends Component<IProps, IStates> {
  state = {
    // name: 'Connie Sun',
    // status: 0, // 0表示账户金额没有，1表示有账户金额
    // balance: 0,
    // creditValue: 0,
  }

  componentDidMount = () => {
    // const { store } = this.props;
    // store.getUserBalance();
    // setTimeout(() => {
    //   this.setState({
    //     status: 1,
    //     balance: 1000,
    //     creditValue: 2000,
    //   });
    // }, 2000);
  }

  render() {
    // const {
    //   name, status, balance, creditValue,
    // } = this.state;
    // const { store } = this.props;
    // const { userBalance } = store;
    const {
      name, status, balance, creditValue, vipLevel, history,
    } = this.props;
    return (
      <div className="account-component-box">
        <div className="name-vip">
          <span>
            你好，
            {name}
          </span>
          <div className={`icon iconfont icon-vip${vipLevel}`} onClick={() => history.push('/vip')} />
        </div>
        <div className="examine">
          {
            status === 0 ? (
              <div className="status">账户余额不可用</div>
            ) : (
              <div className="status-ok">账户余额可用</div>
            )
          }
        </div>
        <div className="balance">
          <div>
            <div className="text">推广余额</div>
            <div className="value">{balance}</div>
          </div>
          <Button
            // type={this.context.buttonType}
            type="primary"
            size="small"
            onClick={() => history.push('/top_up')}
          >
            充值
          </Button>
        </div>
        <div className="credit">
          <div>
            <div className="text">合规信用值</div>
            <div className="value">{creditValue}</div>
          </div>
          <div className="detail-text">详情</div>
        </div>
      </div>
    );
  }
}

Account.contextType = ThemeContext;

export default Account;
