import React, { Component } from 'react';
import { Empty } from 'antd';
import './styles.scss';

class UserPortrait extends Component {
  state = {
    isEmpty: true,
  }

  render() {
    const { isEmpty } = this.state;
    return (
      <div className="user-portrait-component-box">
        <div className="user-portrait-title">用户画像信息</div>
        {
          isEmpty ? (
            <Empty
              description="您的广告展现积累用户较少，无法得出准确用户画像"
            />
          ) : ''
        }
      </div>
    );
  }
}

export default UserPortrait;
