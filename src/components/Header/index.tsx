import React from 'react';
// @ts-ignore
import { cloneDeep } from 'lodash';
import './style.scss';
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import MenuItem from '@components/Header/MenuItem';

interface IProps {
  history?:any;
}
interface IStates {
}

class Header extends React.Component<IProps, IStates> {
  state = {}

  handleClick= (url:string) => {
    const { history } = this.props;
    if (history && url) {
      history.push(url);
    }
  }

  render() {
    const userName = 'Connie Sun';
    const { history } = this.props;
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
                  onClick={(url:string) => this.handleClick(url)}
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
