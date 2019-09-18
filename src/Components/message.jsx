import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.messageText,
    };
  }

  render() {
    return (
            <div>{this.props.messageText}</div>
    );
  }
}
