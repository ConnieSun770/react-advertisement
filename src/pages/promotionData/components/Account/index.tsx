import React, { Component } from 'react';
import {
  StarOutlined, StarFilled, StarTwoTone,
} from '@ant-design/icons';
import { Button } from 'antd';
import './styles.scss';

interface IProps{}
interface IStates{
  equitiesValue:number;
}

class Account extends Component<IProps, IStates> {
  state = {
    equitiesValue: 2,
  }

  render() {
    const { equitiesValue } = this.state;
    return (
      <div className="promotion-account-component-box">
        <div className="name">账户 - Connie Sun</div>
        <div className="info">
          <div className="info-item">
            <span className="title-text">客户权益 </span>
            <span className="title-text">
              {
                Array.from({ length: equitiesValue }, (_, index) => <StarFilled />)
              }
              {
                Array.from({ length: 5 - equitiesValue }, (_, index) => <StarOutlined />)
              }
            </span>
          </div>
          <div className="info-item">
            <span className="title-text">状态 </span>
            <span className="circle" />
            <span className="value-text">账户金未到</span>
          </div>
          <div className="info-item">
            <span className="title-text">推广余额 </span>
            <span className="value-text">0 </span>
            <Button type="primary" size="small">充值</Button>
          </div>
          <div className="info-item">
            <span className="title-text">预算 </span>
            <span className="value-text">不限定预算</span>
          </div>
          <div className="info-item">
            <span className="title-text">地区 </span>
            <span className="value-text">不限定地区</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
