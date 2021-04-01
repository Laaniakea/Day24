import './App.css';
import React, { Component } from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage = () => {
    var myCookieData = "";
    var myLocalStorageData = "";
    var mySessionStorageData = "";
    myCookieData = document.cookie;
    myLocalStorageData = localStorage.getItem('Paragon');
    mySessionStorageData = sessionStorage.getItem('frontend');

    return (myCookieData, myLocalStorageData, mySessionStorageData);
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>setMyStorage</button>
        <button type="button" onClick={this.getMyStorage}>getMyStorage</button>
      </div>
    );
  }
}


export default App;