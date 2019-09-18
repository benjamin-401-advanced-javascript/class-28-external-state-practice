import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Your text here',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormUpdate(this.state.name);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}
