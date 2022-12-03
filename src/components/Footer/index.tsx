import React from 'react';
import { MENU_FOOTER_CONFIG } from 'common/constants/menu';
import './style.scss';

interface IProps {}
interface IStates {}

class Footer extends React.Component<IProps, IStates> {
  render() {
    return (
      <div className="footer-component-box">
        <div className="footer-menu">
          {
            MENU_FOOTER_CONFIG.map((menuItem, index) => (
              <div
                className="footer-menu-item"
                key={`footer-menu-item${index.toString()}`}
              >
                {menuItem.title}
              </div>
            ))
          }
        </div>
        <div className="footer-copyright">©2022 Connie Sun</div>
      </div>
    );
  }
}

export default Footer;
