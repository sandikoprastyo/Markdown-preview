import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.sass";
import Header from "./components/Header.js";
import Textarea from "./components/Textarea.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Build a Markdown preview</h1>
          <Textarea />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
