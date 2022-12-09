import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import './styles.scss';
import { userDataType } from 'pages/topUpPage';

interface ProductType{
  imgUrl: string;
  description: string;
  title: string;
  subTitle:string;
  applicationStatus: boolean;
  vipRequired: number;
}

interface IProps extends RouteComponentProps{
  userData:userDataType;
  productList:ProductType[];
}
interface IStates{
}

class ProductPage extends Component<IProps, IStates> {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { history, userData, productList } = this.props;
    const { name, vipLevel, avatar } = userData;
    return (
      <div className="product-page-box">
        <div className="header-box">
          <Header history={history} username={name} avatar={avatar} />
        </div>
        <div className="product-page-title">广告类型</div>
        <div className="content-box">
          {
            productList && productList.map((productItem: ProductType, index: number) => (
              <div className="product-item-box">
                <img className="item-img" src={productItem.imgUrl} alt="" />
                <div className="product-title">{productItem.title}</div>
                <div className="product-sub-title">{productItem.subTitle}</div>
                <div className="btn-box">
                  <Button type="primary" disabled={vipLevel < productItem.vipRequired}>
                    {vipLevel >= productItem.vipRequired ? '申请广告' : '不可申请'}
                  </Button>
                </div>
                <div className="description-area">{productItem.description}</div>
                {
                  vipLevel < productItem.vipRequired
                  && (
                    <div className="vip-required">
                      {`需要VIP${productItem.vipRequired}申请`}
                      <span className="level-up-text" onClick={() => history.push('/vip')}>去升级</span>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
        <div className="footer-box">
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userData: state.indexData.userData,
    productList: state.indexData.productList,
  };
}

export default connect(mapStateToProps)(ProductPage);
