import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps{}

class App extends Component<Props> {
  handleRoute = () => {
    const { location, history } = this.props;
    const { pathname } = location;
    if (pathname === '/') {
      history.push('index');
      return false;
    }
    return true;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {
          this.handleRoute() ? children : 'other'
        }
      </div>
    );
  }
}

export default App;
