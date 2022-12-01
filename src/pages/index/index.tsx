import React, { Component } from 'react';
import { Button } from 'antd';

interface Props {}

class IndexPage extends Component<Props> {
  render() {
    return (
      <div>
        Hello World
        <span>This is indexPage.</span>
        <Button type="primary">按钮</Button>
      </div>
    );
  }
}

export default IndexPage;
