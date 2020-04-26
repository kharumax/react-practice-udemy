import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name : "Max",age:28},
      {name : "Manu",age: 20},
      {name : "Stepha",age: 26}
    ],
    otherState: "some",
    showPersons: false
  };

  switchNameHandler = () => {
      //Dont do this.state.persons[0].name = "change";
      this.setState({
        persons: [
          {name : "Maximilai",age:28},
          {name : "Manu",age: 40},
          {name : "Stepha",age: 26}
        ]
      })

  };

  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              {name : "Maximilai",age:28},
              {name : event.target.value,age: 40},
              {name : "Stepha",age: 26}
          ]
      })
  };

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow})
  };

  render() {

     const style = {
         backgroundColor: 'white',
         font:'inherit',
         border:'1px solid blue',
         padding: '8px',
         cursor: 'pointer'
     };

     let persons = null;

     if (this.state.showPersons) {
         persons = (
             <div>
                 {this.state.persons.map(person => {
                     return <Person
                         name={person.name}
                         age={person.age}/>
                 })}
             </div>
         )
     }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is working</p>
          <button style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
