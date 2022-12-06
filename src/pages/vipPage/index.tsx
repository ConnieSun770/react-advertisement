import React, { Component } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps{}
interface IStates{}

class VipPage extends Component<IProps, IStates> {
  render() {
    const { history } = this.props;
    return (
      <div className="vip-page-components-box">
        <div className="header-box">
          <Header username="Connie Sun" history={history} />
        </div>
        会员中心
        <Footer />
      </div>
    );
  }
}

export default VipPage;
