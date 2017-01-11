import React from 'react';

class ExternalLink extends React.Component {
  render() {
    return (
      <li>
        <a target="_blank" href={ this.props.href }>
          { this.props.name }
        </a>
      </li>
    );
  }
}

export default ExternalLink;
