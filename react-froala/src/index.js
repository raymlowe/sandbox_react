import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';


  class Intro extends React.Component {
    render() {
      return (
        <div className="greeting">
          <h1>Hello World</h1>
        </div>
      );
    }
  }

  class Froala extends React.Component {
    render(){
      return(
        <FroalaEditor
          tag='textarea'
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      )
    }

  }
  
  // ========================================
  
  ReactDOM.render(
    <Intro />,
    <Froala />,
    document.getElementById('root')
  );
  