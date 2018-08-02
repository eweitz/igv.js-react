import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// The line below is enabled by ES6 export in igv.js.
import igv from 'tmp_es6_igv';

var igvStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  margin: '8px',
  border: '1px solid lightgray'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to igv.js in React!</h1>
        </header>
        <AppIgv/>
      </div>
    );
  }
}

class AppIgv extends Component {

  componentDidMount() {
    var igvContainer = document.getElementById('igv-div');
    var igvOptions = {genome: 'hg38', locus: 'BRCA1'};
    return igv.createBrowser(igvContainer, igvOptions);
  }

  render() {
    return (
      <div id="igv-div" style={igvStyle}></div>
    );
  }
}


export default App;
