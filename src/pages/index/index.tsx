import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import moment from 'moment';
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

  handleDateChange = (date: moment.Moment|null) => {
    console.log(moment(date).unix());
  }

  render() {
    return (
      <div className="index-page">
        Hello World
        <div className="middle-box">
          <span>This is indexPage.</span>
          <Button type="primary">按钮</Button>
        </div>
        <div>
          <DatePicker onChange={this.handleDateChange} />
        </div>
      </div>
    );
  }
}

export default IndexPage;
