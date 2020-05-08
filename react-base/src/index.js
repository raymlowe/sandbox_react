import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  class Intro extends React.Component {
    render() {
      return (
        <div className="greeting">
          <h1>Hello World</h1>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Intro />,
    document.getElementById('root')
  );
  