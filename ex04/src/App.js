import './App.css';
import React, { Component } from 'react';

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }
  getLocalStorage = () => {
    var myLocalStorageData = "";
    myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>setLocalStorage</button>
        <button type="button" onClick={this.getLocalStorage}>getLocalStorage</button>
      </div>
    );
  }
}


export default App;