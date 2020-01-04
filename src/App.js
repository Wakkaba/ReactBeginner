import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium'
import ErrorBoun from "./ErrorBoun/ErrorBoun";


class App extends Component{
  state = {
      persons: [
          {id:1, name: '4Head', age: 27},
          {id:2, name: 'ValeraBoy', age: 54},
          {id:3, name: 'XQC', age: 26}
      ],
      showPersons: false
  };

  changeNameHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });
      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons})
  };

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
      const style ={
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
          ':hover': {
              backgroundColor: 'lightgreen',
              color: 'black'
          }
      };

      let persons = null;

      if (this.state.showPersons) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <ErrorBoun key={person.id}> <Person
                          click={ () => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.changeNameHandler(event, person.id)}/> </ErrorBoun>

                  })}
              </div>
          );
          style.backgroundColor = 'red';
          style[':hover'] = {
              backgroundColor: 'salmon',
                  color: 'black'
          }
      }
      const  classes = [];
      if (this.state.persons.length <=2){
          classes.push('red');
      }
      if (this.state.persons.length <=1){
          classes.push('bold');
      }

      return (
          <StyleRoot>
          <div className="App">
              <h1>Hello this is React-Udemy</h1>
              <p className={classes.join(' ')}>Wow look at this dude</p>
              {/*// /*THIS IS BIND METHOD = ARROW FUNC*/}
              <button style={style}
                      onClick={this.togglePersonHandler}> Change Name</button>
              { /*THIS IS BIND METHOD = ARROW FUNC*/}
              {persons}
          </div>
          </StyleRoot>
      );
  }
}

export default Radium(App);
