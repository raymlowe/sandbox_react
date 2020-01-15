import React, { Component, Suspense } from "react";
import shortid from "shortid";
import * as Views from "./views";

import "./App.css";

class App extends Component {
  state = {
    loadedComponents: {},
    components: []
  };

  addView = async viewName => {
    const { loadedComponents } = this.state;
    if (loadedComponents[viewName]) return;

    const View = Views[viewName];
    const key = shortid.generate();
    const { data } = this.props;

    const component = View ? (
      <View key={key} data={data} />
    ) : (
      <Views.NullView key={key} />
    );

    this.setState(prevState => ({
      components: [...prevState.components, component],
      loadedComponents: { ...prevState.loadedComponents, [viewName]: true }
    }));
  };

  handleShowTableChange = async event => {
    await this.addView("TableView");
  };

  handleShowGraphChange = async event => {
    await this.addView("GraphView");
  };

  handleNullGraphChange = async event => {
    await this.addView("NullView");
  };

  render() {
    const { components } = this.state;

    return (
      <div className="App">
        <div className="buttons">
          <div>
            <button id="table" onClick={this.handleShowTableChange}>
              Show Table
            </button>
          </div>
          <div>
            <button id="graph" onClick={this.handleShowGraphChange}>
              Show Graph
            </button>
          </div>
          <div>
            <button id="null" onClick={this.handleNullGraphChange}>
              Not yet implemented...
            </button>
          </div>
        </div>
        <div className="views">
          <Suspense fallback={<div>Loading a view</div>}>
            {components.length === 0 ? (
              <div>Nothing to display...</div>
            ) : (
              components
            )}
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
