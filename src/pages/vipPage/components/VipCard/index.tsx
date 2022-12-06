import React, { Component } from 'react';
import { Button } from 'antd';
import { userDataType } from '../../types';
import './styles.scss';

interface IProps{
}

interface IStates{
}

class VipCard extends Component<IProps, IStates> {
  render() {
    return (
      <div className="vip-card-component-box">
        <div className="vip-card vip-card-current">
          <div className="icon iconfont icon-vip1" />
        </div>
        <div className="arrow">
          <Button type="primary" size="large">
            {`升级${' =>'}`}
          </Button>
        </div>
        <div className="vip-card vip-card-next">
          <div className="icon iconfont icon-vip2" />
        </div>
      </div>
    );
  }
}

export default VipCard;
