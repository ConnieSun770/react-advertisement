import React, { Component } from 'react';
// import './style.scss';

interface Props {}

class LoginPage extends Component<Props> {
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
