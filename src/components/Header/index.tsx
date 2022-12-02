import React from 'react';
import './style.scss';
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import MenuItem from '@components/Header/MenuItem';

interface IProps {}
interface IStates {}

class Header extends React.Component<IProps, IStates> {
  state = {}

  render() {
    const userName = 'Connie Sun';
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo" />
          <div className="menu">
            {
              MENU_INDEX_CONFIG.map((menuItem, index) => (
                <MenuItem
                  menuItemInfo={menuItem}
                  isActive={menuItem.isActive}
                  key={`index-menuItem${index.toString()}`}
                />
              ))
            }
          </div>
        </div>
        <div className="user-info">
          <UserOutlined />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    );
  }
}

export default Header;
