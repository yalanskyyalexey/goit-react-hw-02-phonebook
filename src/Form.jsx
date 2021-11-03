import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    tag: '',
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: this.state.name }],
    }));
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.telInputId}>
            Тел
            <input
              type="tel"
              name="tag"
              value={this.state.tag}
              onChange={this.handleInput}
              id={this.telInputId}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
