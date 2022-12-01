import React, { Component } from 'react';
import './style.scss';

interface Props {}

class App extends Component<Props> {
  render() {
    return (
      <div style={{ color: 'red' }}>
        Hello World
        <span className="box">I am Connie.</span>
      </div>
    );
  }
}

export default App;
