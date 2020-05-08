import React from 'react';
import ReactDOM from 'react-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './index.css';


  class Intro extends React.Component {
    render() {
      return (
        <div className="greeting">
          <h1>CKEditor 5 Demo</h1>
          <h2>CKEditor 5-1</h2>
          

          <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    disabled={true}
                />

                <h2>Editor 2</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    config={ {
                      plugins: [ 'Heading', 'Bold', 'Table' ],
                      removePlugins: ['Link'],
                      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'insertTable' ],
                      heading: {
                          options: [
                              { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                          ]
                      },
                      table: {
                        toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                      }
                    } }
                />



        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Intro />,
    document.getElementById('root')
  );
  