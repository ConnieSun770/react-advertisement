import React, { Component } from 'react';
import { message } from 'antd';
import './style.scss';
import PRODUCTSERVICE_CONFIG from 'common/constants/productService';

interface IProps {
  history:any;
}

interface IStates {
}

class Product extends Component<IProps, IStates> {
  state = {}

  handleServiceItemClick = (url: string) => {
    const { history } = this.props;
    if (url) {
      history.push(url);
    } else {
      message.open({
        type: 'info',
        content: '功能正在开发中,敬请期待!',
      });
    }
  }

  render() {
    return (
      <div className="product-service-component-box">
        <div className="title">营销服务</div>
        {
          PRODUCTSERVICE_CONFIG.map((productItem, index) => (
            <div
              className="product-service-item"
              key={`index-menuItem${index.toString()}`}
              onClick={() => { this.handleServiceItemClick(productItem.link); }}
            >
              <img src={productItem.marketToolImgUrl} alt="" />
              <div className="name">{productItem.marketToolTitle}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Product;
