import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p>This is really working!</p>
        <Person name="Esteban" age="27" />
        <Person name="Camilo" age="25"/>
        <Person name="Catalina" age="28"/>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
