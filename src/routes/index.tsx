import React, { Component } from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import IndexPage from 'pages/index/index';
import LoginPage from 'pages/login/index';
import PromotionDataPage from 'pages/promotionData/index';
import VipPage from 'pages/vipPage/index';
import TopUpPage from 'pages/topUpPage';
import ProductPage from 'pages/ProductPage';
import App from '../App';

const allRoutes = [
  {
    path: '/index',
    exact: false,
    component: IndexPage,
    title: '',
  },
  {
    path: '/promotion',
    exact: false,
    component: PromotionDataPage,
    title: '',
  },
  {
    path: '/vip',
    exact: false,
    component: VipPage,
    title: '',
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
    title: '',
  },
  {
    path: '/top_up',
    exact: false,
    component: TopUpPage,
    title: '',
  },
  {
    path: '/product',
    exact: false,
    component: ProductPage,
    title: '',
  },
];

const AppWrap = withRouter(App);

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppWrap>
            {
              renderRoutes(allRoutes.map(
                (item) => ({ ...item, key: item.path }),
              ))
            }
          </AppWrap>
        </Router>
      </div>
    );
  }
}

export default AppRoute;
