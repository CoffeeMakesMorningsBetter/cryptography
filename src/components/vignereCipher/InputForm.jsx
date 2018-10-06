import React, { Component } from 'react';
import { checkValidInput } from '../../helperMethods/helperVignere';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let check = checkValidInput(this.state.input);
    if(check) {
      this.props.addWord({word: this.state.input});
      this.setState({input: "", error: false});
    } else {
      this.setState({input: this.state.input, error: true});
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input-word"></label>
          <input
            id="input-word"
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Update"
          />
        </form>
      </div>
    )
  }
}

export default InputForm