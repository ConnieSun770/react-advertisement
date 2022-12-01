import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import './style.scss';

interface Props {}

class IndexPage extends Component<Props> {
  componentDidMount() {
    axios.get('/ad/index/gray').then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="index-page">
        Hello World
        <div className="middle-box">
          <span>This is indexPage.</span>
          <Button type="primary">按钮</Button>
        </div>
      </div>
    );
  }
}

export default IndexPage;
