import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteName: process.env.REACT_APP_SITENAME };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      siteName: "Hey - this is my new title"
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.siteName}</h1>
        <button onClick={this.handleClick}>Change Title</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
