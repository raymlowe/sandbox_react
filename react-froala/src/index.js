import React from 'react';
import ReactDOM from 'react-dom';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';


const App = () => (
  <div>
     <h1>Hello world!!</h1>
  </div>
)

// Render Froala Editor component.
ReactDOM.render(<FroalaEditor tag='textarea'/>, document.getElementById('root'));



//ReactDOM.render(<App/>, document.getElementById('root'));