import React, { Component } from 'react';
import { MenuItemInfoType } from './types';

interface IProps {
  isActive?:boolean;
  onClick?:(url: string) =>void;
  menuItemInfo:MenuItemInfoType;
}

class MenuItem extends Component<IProps> {
  handleMenuClick(url:string) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(url);
    }
  }

  render() {
    const { menuItemInfo, isActive } = this.props;
    return (
      <div className="index-menuItem-component-box">
        <div className="menu-item-title" onClick={() => this.handleMenuClick(menuItemInfo.url)}>
          { menuItemInfo.name }
          {
            menuItemInfo.menuChildren.length > 0 && (<span className="arrow-icon" />)
          }
        </div>
        {
          isActive && (<div className="bottom-line-active" />)
        }
        {
          menuItemInfo.menuChildren.length > 0 && (
            <div className="menu-children-box">
              {
                menuItemInfo.menuChildren.map((menuChild, index) => (
                  <div
                    className="menu-child"
                    key={`menu-child${index.toString()}`}
                    onClick={() => this.handleMenuClick(menuChild.url)}
                  >
                    <div className="menu-child-label">
                      {menuChild.label}
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
        <div className="bottom-line" />
        <div className="menu-children-box" />
      </div>
    );
  }
}

export default MenuItem;