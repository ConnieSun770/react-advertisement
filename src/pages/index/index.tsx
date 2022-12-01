import React, { Component } from 'react';
// import './style.scss';

interface Props {}

class IndexPage extends Component<Props> {
  render() {
    return (
      <div style={{ color: 'red' }}>
        Hello World
        <span className="box">This is indexPage.</span>
      </div>
    );
  }
}

export default IndexPage;
