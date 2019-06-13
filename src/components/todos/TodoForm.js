import React, { Component } from 'react';

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          placeholder='Add a Todo Here'
          name ="name"
          value={this.state.name}
          onChange={this.handleChange}
         />
      </form>
    )
  }
}

export default TodoForm;