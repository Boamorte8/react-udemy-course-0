import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: 'Esteban', age: 27 },
      { name: 'Camilo', age: 26 },
      { name: 'Catalina', age: 28 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName, index) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Camilo', age: 26 },
        { name: 'Catalina', age: 29 },
      ]
    });
    this.deletePersonHandler(index);
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} key={index}
                          click={() => this.switchNameHandler('Santiago', index)}
                          changed={this.nameChangedHandler}
                    />
          })}
        </div>
      );
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App </h1>
          <p>This is really working!</p>
          <button
            onClick={this.togglePersonsHandler}>
              Toggle Persons
          </button>
          <button
            onClick={() => this.switchNameHandler('Sebastian')}>
              Switch Name
          </button>
          {persons}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
// export default Radium(App);
