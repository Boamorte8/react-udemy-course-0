import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: 'Esteban', age: 27 },
      { name: 'Camilo', age: 26 },
      { name: 'Catalina', age: 28 },
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Camilo', age: 26 },
        { name: 'Catalina', age: 29 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Esteban', age: 27 },
        { name: event.target.value, age: 26 },
        { name: 'Catalina', age: 28 },
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '.5rem',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App </h1>
          <p>This is really working!</p>
          <button
            style={style}
            onClick={() => this.switchNameHandler('Sebastian')}>
              Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Santiago')}
            changed={this.nameChangedHandler}>
              My Hobbies: Walking
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default Radium(App);
