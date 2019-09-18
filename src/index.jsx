import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Components/message';
import Form from './Components/form';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Your text here',
      messageText: 'Your message will go here',
    };
  }

  handleFormUpdate = (newMessage) => {
    this.setState({ messageText: newMessage, count: this.state.count + 1 });
  }

  render() {
    return (
        <>
          <p>happy</p>
          <Form handleFormUpdate={this.handleFormUpdate} />
          <Message messageText={this.state.messageText}/>
          <Message messageText={this.state.count}/>

        </>
    );
  }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
