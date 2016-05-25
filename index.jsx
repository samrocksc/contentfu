require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  render() {
    return (
      <div>Made by <a href="https://shoutinginfrench.com">Sam Clark</a></div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
