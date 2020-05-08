import React from 'react';
import ReactDOM from 'react-dom';
import CKEditor from 'ckeditor4-react';
import './index.css';



  class Intro extends React.Component {
    
    
    render() {
      //This might be useful if we want multiple version of CKE running
      //CKEditor.editorUrl = 'https://your-website.example/ckeditor/ckeditor.js';
      
      return (
        <div className="greeting">
          <h2>Using CKEditor 4 in React</h2>
          <CKEditor
              data="<p>Hello from CKEditor 4!</p>"
              type="classic"
          />

          <h2>Second Editor</h2>
          <CKEditor
              data="<p>Hello from CKEditor 4!</p>"
              type="classic"
              config={ {
                toolbar: [ [ 'Bold' ] ]
            } }
          />

          <h2>Third Editor</h2>
          <CKEditor
              data="<p>Hello from CKEditor 4!</p>"
              type="inline"
              config={ {
                toolbar: [ [ 'Bold' ] ]
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
  