import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>WatchTube Title</h1>
        { children }
      </div>
    );
  }
}
