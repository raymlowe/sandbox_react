https://www.valentinog.com/blog/babel/

mkdir webpack-react-tutorial && cd $_
mkdir -p src
npm init -y

==INSTALL WEBPACK

npm i webpack webpack-cli --save-dev
IN package.json
"scripts": {
  "build": "webpack --mode production"
}

==INSTAL BABEL
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
CREATE new file: .babelrc
IN .babelrc in ROOT
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


CREATE webpack.config.js in ROOT
IN webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

npm i react react-dom
mkdir -p src/js/components/




CREATE new file: src/js/components/Form.js
IN Form.js:

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;







CREATE new file: src/index.js
IN index.js

import Form from "./js/components/Form";



TEST:
npm run build





npm i html-webpack-plugin html-loader --save-dev

UPDATE webpack.config.js
WITH:
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};


CREATE new file: src/index.html
IN index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
<div id="container"></div>
</body>
</html>



TEST:
npm run build


==SERVER SETUP / AUTO DEPLOY
npm i webpack-dev-server --save-dev

IN package.json
UPDATE:

"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}


npm start
