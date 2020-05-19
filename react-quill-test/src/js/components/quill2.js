import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactQuill from 'react-quill'; // ES6


class Quill2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Also a quill editor' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.toolbarOptions =  ['bold', 'italic', 'underline', 'strike']
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }
 
  render() {
    return (
    <ReactQuill 
        value={this.state.text}
        onChange={this.handleChange}
        modules={Quill2.modules}
    />
    )
  }
}









/* 
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
Quill2.modules = {
    toolbar: {
        container:
        [
            [{ 'placeholder': ['[GuestName]', '[HotelName]'] }], // my custom dropdown
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                    // remove formatting button
           
        ],
        handlers: {
            "placeholder": function (value) { 
                if (value) {
                    const cursorPosition = this.quill.getSelection().index;
                    this.quill.insertText(cursorPosition, value);
                    this.quill.setSelection(cursorPosition + value.length);
                }
            }
        }
    }
}




export default Quill2;

const wrapper = document.getElementById("container2");
wrapper ? ReactDOM.render(<Quill2 />, wrapper) : false;