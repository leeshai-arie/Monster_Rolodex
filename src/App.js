import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jo",
    };
  }

  render() {
    return (
      <div className="App-header">
        <p>Hi {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Leo" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
