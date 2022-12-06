import React, { Component } from 'react';
import {
  StarOutlined, StarFilled, StarTwoTone,
} from '@ant-design/icons';
import { Button } from 'antd';
import './styles.scss';

interface IProps{
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
}
interface IStates{
}

class Account extends Component<IProps, IStates> {
  state = {
  }

  render() {
    const {
      name, status, balance, vipLevel, creditValue,
    } = this.props;
    return (
      <div className="promotion-account-component-box">
        <div className="name">
          账户 -
          {` ${name}`}
        </div>
        <div className="info">
          <div className="info-item">
            <span className="title-text">客户权益 </span>
            <span className="title-text">
              {
                Array.from({ length: vipLevel }, (_, index) => <StarFilled key={`star-filled-${index}`} />)
              }
              {
                Array.from({ length: 5 - vipLevel }, (_, index) => <StarOutlined key={`star-outlined-${index}`} />)
              }
            </span>
          </div>
          <div className="info-item">
            <span className="title-text">状态 </span>
            {
              status ? (
                <>
                  <span className="circle circle-active" />
                  <span className="value-text">账户金已到</span>
                </>
              ) : (
                <>
                  <span className="circle" />
                  <span className="value-text">账户金未到</span>
                </>
              )
            }
          </div>
          <div className="info-item">
            <span className="title-text">推广余额 </span>
            <span className="value-text">{balance}</span>
            <Button type="primary" size="small">充值</Button>
          </div>
          <div className="info-item">
            <span className="title-text">信用值 </span>
            <span className="value-text">{creditValue}</span>
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
