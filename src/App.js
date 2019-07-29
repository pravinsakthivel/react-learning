import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium ,{ StyleRoot }from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: "ram", age: "26" },
      { "id": "2", name: "pravin", age: "29" }
    ],
    showPersons: false
  }
  togglePersonsHandler = () => {
    console.log("In toggle handler");
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonshandler = (personIndex) => {
    //const person = this.state.persons.splice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "ram", age: "26" },
        { name: event.target.value, age: "29" }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    console.log("in name change")
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log("personIndex" + personIndex);
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log(person)
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // console.log(persons);
    this.setState({
      persons: persons
    })
  }
  render() {
    // Inline styles
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '15px',
      border: '1px solid blue',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'white'
      }

    }
    let personsSection = null;
    if (this.state.showPersons) {
      personsSection = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
              age={person.age}
              click={this.deletePersonshandler.bind(this, index)}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}
            >

            </Person>
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
      <div className="App">
        {/* below code onClick={()=>this.switchNameHandler("Ram Pravin")} may be ineffective
        recommended to use is click={this.switchNameHandler.bind(this,"Sakthivel")}  */}
        <p className={classes.join(" ")}>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Switch button</button>
        {personsSection}




      </div>
      </StyleRoot>
    );
  }

}

export default Radium(App);
