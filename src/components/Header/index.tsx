import React from 'react';
// @ts-ignore
import { cloneDeep } from 'lodash';
import './style.scss';
import { message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import MenuItem from '@components/Header/MenuItem';

interface IProps {
  history?:any;
  username:string;
}
interface IStates {
}

class Header extends React.Component<IProps, IStates> {
  state = {}

  handleClick= (url:string, hasChildren:boolean) => {
    const { history } = this.props;
    if (url) {
      history.push(url);
    } else if (hasChildren) {
      message.open({
        type: 'info',
        content: '功能正在开发中,敬请期待!',
      })
        . then((r) => console.log(r));
    }
  }

  render() {
    const { history, username } = this.props;
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo" />
          <div className="menu">
            {
              MENU_INDEX_CONFIG.map((menuItem, index) => (
                <MenuItem
                  menuItemInfo={menuItem}
                  isActive={
                    history.location.pathname === menuItem.url
                    // eslint-disable-next-line max-len
                    || menuItem.menuChildren.some((item) => history.location.pathname === item.url)
                  }
                  key={`index-menuItem${index.toString()}`}
                  onClick={(url:string, hasChildren:boolean) => this.handleClick(url, hasChildren)}
                />
              ))
            }
          </div>
        </div>
        <div className="user-info">
          <UserOutlined />
          <span className="user-name">{username}</span>
        </div>
      </div>
    );
  }
}

export default Header;
