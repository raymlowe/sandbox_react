import React from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 class App2 extends React.Component {
   handleEditorChange = (content, editor) => {
     console.log('Content was updated:', content);
   }

   render() {
     return (
       <Editor
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify'
         }}
         onEditorChange={this.handleEditorChange}
       />
     );
   }
 }

 export default App2;