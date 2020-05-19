import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactQuill from 'react-quill'; // ES6

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Welcome to Quill JS <br> New Line' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }
 
  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;