import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

class IndexBanner extends React.Component {
  render() {
    return (
      <div className="index-banner-component-box">
        <Carousel autoplay>
          <div>
            <img src="assets/productimgs/专属定制.png" alt="" />
          </div>
          <div>
            <img src="assets/productimgs/直播系统.png" alt="" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default IndexBanner;
