import React, { Component } from 'react';
import utilsIndex from '@utils/index';
// import './style.scss';

interface Props {}

class LoginPage extends Component<Props> {
  componentDidMount() {
    console.log(utilsIndex.getUrlParam('id'));
  }

  render() {
    return (
      <div style={{ color: 'red' }}>
        Hello World
        <span className="box">This is loginPage.</span>
      </div>
    );
  }
}

export default LoginPage;
