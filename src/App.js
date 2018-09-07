import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RemoteView from "./components/pods/remote/RemoteView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RemoteView />
      </div>
    );
  }
}

export default App;
