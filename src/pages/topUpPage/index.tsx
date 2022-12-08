import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './styles.scss';
import { connect } from 'react-redux';

export interface userDataType {
  name:string;
  status:number;
  balance:number;
  creditValue:number;
  vipLevel:number;
  avatar:string;
}

interface IProps extends RouteComponentProps{
  userData:userDataType;
}

interface IStates{}

class TopUpPage extends Component<IProps, IStates> {
  render() {
    const { history, userData } = this.props;
    const { name } = userData;
    return (
      <div className="top-up-component-box">
        <div className="header-box">
          <Header history={history} username={name} />
        </div>
        <div className="content-box">

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
  };
}

export default connect(mapStateToProps)(TopUpPage);
